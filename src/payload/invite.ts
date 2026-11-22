import { randomBytes } from 'node:crypto';

import type { Endpoint } from 'payload';

import { inviteEmail, INVITE_LINK_DAYS } from './account-emails';
import { isOwner, type Role } from './access';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const reply = (status: number, message: string) => Response.json({ message }, { status });

/**
 * POST /api/users/invite { email, name?, role? }, for owners only.
 *
 * Creates the account with a long random password nobody ever sees, then
 * emails the person a link to choose their own. Inviting someone who already
 * has an account just sends them a fresh link; their role stays as it is.
 */
export const inviteEndpoint: Endpoint = {
  path: '/invite',
  method: 'post',
  handler: async (req) => {
    if (!isOwner(req.user)) return reply(403, 'Only owners can invite people.');

    const body = ((await req.json?.().catch(() => null)) ?? {}) as Record<string, unknown>;
    const email = String(body.email ?? '').trim().toLowerCase();
    const name = String(body.name ?? '').trim() || undefined;
    const requestedRole: Role = body.role === 'owner' ? 'owner' : 'editor';
    if (!EMAIL.test(email)) return reply(400, 'Enter a valid email address.');

    const { docs } = await req.payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1,
      depth: 0,
    });
    const existing = docs[0];

    if (!existing) {
      await req.payload.create({
        collection: 'users',
        data: { email, name, role: requestedRole, password: randomBytes(32).toString('base64url') },
        overrideAccess: true,
      });
    }

    const token = await req.payload.forgotPassword({
      collection: 'users',
      data: { email },
      disableEmail: true,
      expiration: INVITE_LINK_DAYS * 24 * 60 * 60 * 1000,
    });

    const inviter = req.user as { name?: string | null; email?: string };
    const message = inviteEmail(req, {
      token,
      name: existing?.name ?? name,
      role: (existing?.role as Role | undefined) ?? requestedRole,
      invitedBy: inviter.name || inviter.email,
    });

    try {
      await req.payload.sendEmail({ to: email, ...message });
    } catch (err) {
      req.payload.logger.error({ err, msg: `Invitation email to ${email} failed` });
      return reply(
        502,
        existing
          ? `The email to ${email} could not be sent. Try again in a few minutes.`
          : `The account for ${email} was created, but the email could not be sent. Try "Send invitation" again in a few minutes.`,
      );
    }

    return reply(
      200,
      existing
        ? `${email} already has access. We have sent them a fresh link to choose a password.`
        : `Invitation sent to ${email}. They have ${INVITE_LINK_DAYS} days to choose a password.`,
    );
  },
};
