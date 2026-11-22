import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "donate" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"button_label" varchar,
  	"heading" varchar,
  	"subtitle" varchar,
  	"footer_note" varchar,
  	"diaspora_label" varchar,
  	"diaspora_helper" varchar,
  	"diaspora_currencies" varchar,
  	"diaspora_cta_label" varchar,
  	"diaspora_note" varchar,
  	"diaspora_contact_email" varchar,
  	"local_label" varchar,
  	"local_ecocash_merchant_code" varchar,
  	"local_ecocash_dial_string" varchar,
  	"local_bank_name" varchar,
  	"local_bank_account_name" varchar,
  	"local_bank_account_number" varchar,
  	"local_bank_branch" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "donate_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_donate_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_button_label" varchar,
  	"version_heading" varchar,
  	"version_subtitle" varchar,
  	"version_footer_note" varchar,
  	"version_diaspora_label" varchar,
  	"version_diaspora_helper" varchar,
  	"version_diaspora_currencies" varchar,
  	"version_diaspora_cta_label" varchar,
  	"version_diaspora_note" varchar,
  	"version_diaspora_contact_email" varchar,
  	"version_local_label" varchar,
  	"version_local_ecocash_merchant_code" varchar,
  	"version_local_ecocash_dial_string" varchar,
  	"version_local_bank_name" varchar,
  	"version_local_bank_account_name" varchar,
  	"version_local_bank_account_number" varchar,
  	"version_local_bank_branch" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_donate_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "donate_texts" ADD CONSTRAINT "donate_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."donate"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_donate_v_texts" ADD CONSTRAINT "_donate_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_donate_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "donate_texts_order_parent" ON "donate_texts" USING btree ("order","parent_id");
  CREATE INDEX "_donate_v_created_at_idx" ON "_donate_v" USING btree ("created_at");
  CREATE INDEX "_donate_v_updated_at_idx" ON "_donate_v" USING btree ("updated_at");
  CREATE INDEX "_donate_v_texts_order_parent" ON "_donate_v_texts" USING btree ("order","parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "donate" CASCADE;
  DROP TABLE "donate_texts" CASCADE;
  DROP TABLE "_donate_v" CASCADE;
  DROP TABLE "_donate_v_texts" CASCADE;`)
}
