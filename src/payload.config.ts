import path from 'path';
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { s3Storage } from '@payloadcms/storage-s3';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { migrations } from './migrations';
import { DonorYears } from './payload/collections/DonorYears';
import { Media } from './payload/collections/Media';
import { StaffPhotos } from './payload/collections/StaffPhotos';
import { TeamMembers } from './payload/collections/TeamMembers';
import { Users } from './payload/collections/Users';
import { zeptoMailAdapter } from './payload/email';
import { AboutPage } from './payload/globals/AboutPage';
import { ContactPage } from './payload/globals/ContactPage';
import { DonorsPage } from './payload/globals/DonorsPage';
import { FacilitiesPage } from './payload/globals/FacilitiesPage';
import { HomePage } from './payload/globals/HomePage';
import { PrivacyPage } from './payload/globals/PrivacyPage';
import { ServicesPage } from './payload/globals/ServicesPage';
import { TeamPage } from './payload/globals/TeamPage';
import { TermsPage } from './payload/globals/TermsPage';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/+$/, '');

export default buildConfig({
  // On staging and production the server address pins where sign-in cookies
  // are accepted from. Local dev leaves it open, so the admin works on
  // whichever port the dev server lands on.
  serverURL: process.env.NODE_ENV === 'production' ? siteUrl : undefined,
  secret: process.env.PAYLOAD_SECRET ?? '',

  admin: {
    user: Users.slug,
    // Light, warm and on-brand: see src/app/(payload)/custom.css.
    theme: 'light',
    meta: {
      titleSuffix: ' · Ekuphumuleni editor',
      icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/icon.svg' }],
      robots: 'noindex, nofollow',
    },
    components: {
      graphics: {
        Logo: '@/payload/components/Logo#Logo',
        Icon: '@/payload/components/Logo#Icon',
      },
      beforeDashboard: ['@/payload/components/Welcome#Welcome'],
    },
    importMap: { baseDir: path.resolve(dirname) },
  },

  // Pages first, in the order they appear in the site's navigation.
  globals: [
    HomePage,
    AboutPage,
    ServicesPage,
    FacilitiesPage,
    TeamPage,
    DonorsPage,
    ContactPage,
    PrivacyPage,
    TermsPage,
  ],
  collections: [TeamMembers, StaffPhotos, DonorYears, Media, Users],

  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },

  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL ?? '' },
    // The schema only changes through migrations in src/migrations, reviewed
    // in a pull request, so the database never drifts from what the code says.
    push: false,
    migrationDir: path.resolve(dirname, 'migrations'),
    // Applied when the server starts in production, so a deploy brings its own
    // schema changes with it. The build itself never touches the database.
    prodMigrations: migrations,
  }),

  plugins: [
    // Uploads go to a private Backblaze bucket with a key limited to it, and
    // are served through the site. Each environment keeps its files under its
    // own prefix (S3_PREFIX, e.g. "stg/media"), so deleting a photo on staging
    // never removes it from production.
    s3Storage({
      enabled: Boolean(process.env.S3_BUCKET),
      collections: { media: { prefix: process.env.S3_PREFIX?.trim() || 'media' } },
      bucket: process.env.S3_BUCKET ?? '',
      config: {
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
        },
      },
    }),
  ],

  email: zeptoMailAdapter(),
  sharp,
  graphQL: { disable: true },
  telemetry: false,
});
