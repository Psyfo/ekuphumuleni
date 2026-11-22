import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_team_members_department" AS ENUM('board', 'administration', 'nursing', 'care');
  CREATE TYPE "public"."enum__team_members_v_department" AS ENUM('board', 'administration', 'nursing', 'care');
  CREATE TYPE "public"."enum_users_role" AS ENUM('owner', 'editor');
  CREATE TYPE "public"."enum_home_services_cards_icon_name" AS ENUM('heart', 'arrow-path', 'sparkles', 'home-modern');
  CREATE TYPE "public"."enum___home_v_services_cards_v_icon_name" AS ENUM('heart', 'arrow-path', 'sparkles', 'home-modern');
  CREATE TYPE "public"."enum_about_establishment_why_choose_cards_icon_name" AS ENUM('heart', 'home', 'shield-check', 'lock-closed', 'hand-thumb-up', 'user-group');
  CREATE TYPE "public"."enum_about_mission_vision_core_values_icon_name" AS ENUM('heart', 'home', 'shield-check', 'lock-closed', 'hand-thumb-up', 'user-group');
  CREATE TYPE "public"."enum___about_v_establishment_why_choose_cards_v_icon_name" AS ENUM('heart', 'home', 'shield-check', 'lock-closed', 'hand-thumb-up', 'user-group');
  CREATE TYPE "public"."enum___about_v_mission_vision_core_values_v_icon_name" AS ENUM('heart', 'home', 'shield-check', 'lock-closed', 'hand-thumb-up', 'user-group');
  CREATE TYPE "public"."enum_services_core_services_services_icon_name" AS ENUM('heart', 'clipboard-document-check', 'user-group', 'sparkles', 'home-modern', 'chat-bubble', 'clock', 'shield-check');
  CREATE TYPE "public"."enum_services_nursing_feature_cards_icon_name" AS ENUM('heart', 'clipboard-document-check', 'user-group', 'sparkles', 'home-modern', 'chat-bubble', 'clock', 'shield-check');
  CREATE TYPE "public"."enum___services_v_core_services_services_v_icon_name" AS ENUM('heart', 'clipboard-document-check', 'user-group', 'sparkles', 'home-modern', 'chat-bubble', 'clock', 'shield-check');
  CREATE TYPE "public"."enum___services_v_nursing_feature_cards_v_icon_name" AS ENUM('heart', 'clipboard-document-check', 'user-group', 'sparkles', 'home-modern', 'chat-bubble', 'clock', 'shield-check');
  CREATE TYPE "public"."enum_facilities_showcase_feature_grid_items_icon_name" AS ENUM('home-modern', 'sparkles', 'sun', 'users', 'bolt', 'beaker', 'globe-alt');
  CREATE TYPE "public"."enum_facilities_sustainability_initiatives_icon_name" AS ENUM('home-modern', 'sparkles', 'sun', 'users', 'bolt', 'beaker', 'globe-alt');
  CREATE TYPE "public"."enum___facilities_v_showcase_feature_grid_items_v_icon_name" AS ENUM('home-modern', 'sparkles', 'sun', 'users', 'bolt', 'beaker', 'globe-alt');
  CREATE TYPE "public"."enum___facilities_v_sustainability_initiatives_v_icon_name" AS ENUM('home-modern', 'sparkles', 'sun', 'users', 'bolt', 'beaker', 'globe-alt');
  CREATE TYPE "public"."enum_donors_special_mentions_mentions_icon_name" AS ENUM('building-library', 'users', 'heart');
  CREATE TYPE "public"."enum___donors_v_special_mentions_mentions_v_icon_name" AS ENUM('building-library', 'users', 'heart');
  CREATE TYPE "public"."enum_contact_info_details_icon_name" AS ENUM('map-pin', 'phone', 'envelope', 'clock');
  CREATE TYPE "public"."enum___contact_v_info_details_v_icon_name" AS ENUM('map-pin', 'phone', 'envelope', 'clock');
  CREATE TABLE "team_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"department" "enum_team_members_department" NOT NULL,
  	"image_id" integer,
  	"bio" varchar,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_team_members_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar NOT NULL,
  	"version_role" varchar,
  	"version_department" "enum__team_members_v_department" NOT NULL,
  	"version_image_id" integer,
  	"version_bio" varchar,
  	"version_order" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "staff_photos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_staff_photos_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_image_id" integer NOT NULL,
  	"version_alt" varchar NOT NULL,
  	"version_caption" varchar,
  	"version_order" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "donor_years" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"year" numeric NOT NULL,
  	"order" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "donor_years_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_donor_years_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_year" numeric NOT NULL,
  	"version_order" numeric NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_donor_years_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"prefix" varchar DEFAULT 'dev/media',
  	"_objectkey" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"team_members_id" integer,
  	"staff_photos_id" integer,
  	"donor_years_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_services_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_home_services_cards_icon_name" NOT NULL,
  	"image_id" integer,
  	"alt" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_title" varchar NOT NULL,
  	"hero_section_subtitle" varchar NOT NULL,
  	"hero_section_eyebrow" varchar,
  	"hero_section_tagline" varchar,
  	"hero_section_background_image_id" integer,
  	"hero_section_primary_cta_label" varchar NOT NULL,
  	"hero_section_secondary_cta_label" varchar NOT NULL,
  	"about_section_heading" varchar NOT NULL,
  	"about_section_intro" varchar NOT NULL,
  	"about_section_founder_image_id" integer,
  	"about_section_founder_name" varchar,
  	"about_section_founder_role" varchar,
  	"about_section_establishment_heading" varchar NOT NULL,
  	"about_section_establishment_body" varchar NOT NULL,
  	"about_section_mission_heading" varchar NOT NULL,
  	"about_section_mission_body" varchar NOT NULL,
  	"about_section_vision_heading" varchar NOT NULL,
  	"about_section_vision_body" varchar NOT NULL,
  	"about_section_core_values_heading" varchar NOT NULL,
  	"services_section_heading" varchar NOT NULL,
  	"services_section_subtitle" varchar NOT NULL,
  	"team_section_heading" varchar NOT NULL,
  	"team_section_body" varchar NOT NULL,
  	"team_section_cta_label" varchar NOT NULL,
  	"donors_section_heading" varchar NOT NULL,
  	"donors_section_body" varchar NOT NULL,
  	"donors_section_cta_label" varchar NOT NULL,
  	"contact_section_heading" varchar NOT NULL,
  	"contact_section_subtitle" varchar NOT NULL,
  	"contact_section_email" varchar NOT NULL,
  	"contact_section_map_query" varchar NOT NULL,
  	"contact_section_cta_label" varchar NOT NULL,
  	"seo_meta_title" varchar NOT NULL,
  	"seo_meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "__home_v_services_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___home_v_services_cards_v_icon_name" NOT NULL,
  	"image_id" integer,
  	"alt" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_title" varchar NOT NULL,
  	"version_hero_section_subtitle" varchar NOT NULL,
  	"version_hero_section_eyebrow" varchar,
  	"version_hero_section_tagline" varchar,
  	"version_hero_section_background_image_id" integer,
  	"version_hero_section_primary_cta_label" varchar NOT NULL,
  	"version_hero_section_secondary_cta_label" varchar NOT NULL,
  	"version_about_section_heading" varchar NOT NULL,
  	"version_about_section_intro" varchar NOT NULL,
  	"version_about_section_founder_image_id" integer,
  	"version_about_section_founder_name" varchar,
  	"version_about_section_founder_role" varchar,
  	"version_about_section_establishment_heading" varchar NOT NULL,
  	"version_about_section_establishment_body" varchar NOT NULL,
  	"version_about_section_mission_heading" varchar NOT NULL,
  	"version_about_section_mission_body" varchar NOT NULL,
  	"version_about_section_vision_heading" varchar NOT NULL,
  	"version_about_section_vision_body" varchar NOT NULL,
  	"version_about_section_core_values_heading" varchar NOT NULL,
  	"version_services_section_heading" varchar NOT NULL,
  	"version_services_section_subtitle" varchar NOT NULL,
  	"version_team_section_heading" varchar NOT NULL,
  	"version_team_section_body" varchar NOT NULL,
  	"version_team_section_cta_label" varchar NOT NULL,
  	"version_donors_section_heading" varchar NOT NULL,
  	"version_donors_section_body" varchar NOT NULL,
  	"version_donors_section_cta_label" varchar NOT NULL,
  	"version_contact_section_heading" varchar NOT NULL,
  	"version_contact_section_subtitle" varchar NOT NULL,
  	"version_contact_section_email" varchar NOT NULL,
  	"version_contact_section_map_query" varchar NOT NULL,
  	"version_contact_section_cta_label" varchar NOT NULL,
  	"version_seo_meta_title" varchar NOT NULL,
  	"version_seo_meta_description" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_home_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "about_establishment_why_choose_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_about_establishment_why_choose_cards_icon_name",
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "about_mission_vision_core_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_about_mission_vision_core_values_icon_name",
  	"label" varchar
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_quote" varchar,
  	"establishment_section_heading" varchar,
  	"establishment_section_subtitle" varchar,
  	"establishment_section_founder_image_id" integer,
  	"establishment_section_founder_name" varchar,
  	"establishment_section_founder_title" varchar,
  	"establishment_section_narrative_heading" varchar,
  	"establishment_section_narrative_paragraph1" varchar,
  	"establishment_section_narrative_paragraph2" varchar,
  	"establishment_section_registration_heading" varchar,
  	"establishment_section_registration_body" varchar,
  	"establishment_section_why_choose_heading" varchar,
  	"establishment_section_closing_statement" varchar,
  	"mission_vision_section_heading" varchar,
  	"mission_vision_section_subtitle" varchar,
  	"mission_vision_section_mission_heading" varchar,
  	"mission_vision_section_mission_body" varchar,
  	"mission_vision_section_vision_heading" varchar,
  	"mission_vision_section_vision_body" varchar,
  	"mission_vision_section_vision_footnote" varchar,
  	"mission_vision_section_core_values_heading" varchar,
  	"impact_section_heading" varchar,
  	"impact_section_subtitle" varchar,
  	"impact_section_establishment_year" numeric,
  	"impact_section_beds_available" numeric,
  	"impact_section_staff_count" numeric,
  	"impact_section_satisfaction_percent" numeric,
  	"impact_section_context_paragraph1" varchar,
  	"impact_section_context_paragraph2" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "__about_v_establishment_why_choose_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___about_v_establishment_why_choose_cards_v_icon_name",
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__about_v_mission_vision_core_values_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___about_v_mission_vision_core_values_v_icon_name",
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_about_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_title" varchar,
  	"version_hero_subtitle" varchar,
  	"version_hero_quote" varchar,
  	"version_establishment_section_heading" varchar,
  	"version_establishment_section_subtitle" varchar,
  	"version_establishment_section_founder_image_id" integer,
  	"version_establishment_section_founder_name" varchar,
  	"version_establishment_section_founder_title" varchar,
  	"version_establishment_section_narrative_heading" varchar,
  	"version_establishment_section_narrative_paragraph1" varchar,
  	"version_establishment_section_narrative_paragraph2" varchar,
  	"version_establishment_section_registration_heading" varchar,
  	"version_establishment_section_registration_body" varchar,
  	"version_establishment_section_why_choose_heading" varchar,
  	"version_establishment_section_closing_statement" varchar,
  	"version_mission_vision_section_heading" varchar,
  	"version_mission_vision_section_subtitle" varchar,
  	"version_mission_vision_section_mission_heading" varchar,
  	"version_mission_vision_section_mission_body" varchar,
  	"version_mission_vision_section_vision_heading" varchar,
  	"version_mission_vision_section_vision_body" varchar,
  	"version_mission_vision_section_vision_footnote" varchar,
  	"version_mission_vision_section_core_values_heading" varchar,
  	"version_impact_section_heading" varchar,
  	"version_impact_section_subtitle" varchar,
  	"version_impact_section_establishment_year" numeric,
  	"version_impact_section_beds_available" numeric,
  	"version_impact_section_staff_count" numeric,
  	"version_impact_section_satisfaction_percent" numeric,
  	"version_impact_section_context_paragraph1" varchar,
  	"version_impact_section_context_paragraph2" varchar,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_about_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_core_services_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_services_core_services_services_icon_name",
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "services_nursing_feature_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_services_nursing_feature_cards_icon_name",
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "services_nursing_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "services_rehabilitation_programs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "services_rehabilitation_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_quote" varchar,
  	"core_services_section_heading" varchar,
  	"core_services_section_subtitle" varchar,
  	"core_services_section_cta_heading" varchar,
  	"core_services_section_cta_body" varchar,
  	"core_services_section_cta_button_label" varchar,
  	"nursing_section_heading" varchar,
  	"nursing_section_subtitle" varchar,
  	"nursing_section_featured_image_id" integer,
  	"nursing_section_featured_heading" varchar,
  	"nursing_section_featured_body" varchar,
  	"rehabilitation_section_heading" varchar,
  	"rehabilitation_section_subtitle" varchar,
  	"rehabilitation_section_featured_image_id" integer,
  	"rehabilitation_section_featured_heading" varchar,
  	"rehabilitation_section_featured_body" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "services_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "__services_v_core_services_services_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___services_v_core_services_services_v_icon_name",
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_nursing_feature_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___services_v_nursing_feature_cards_v_icon_name",
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_nursing_gallery_images_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_rehabilitation_programs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__services_v_rehabilitation_gallery_images_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_title" varchar,
  	"version_hero_subtitle" varchar,
  	"version_hero_quote" varchar,
  	"version_core_services_section_heading" varchar,
  	"version_core_services_section_subtitle" varchar,
  	"version_core_services_section_cta_heading" varchar,
  	"version_core_services_section_cta_body" varchar,
  	"version_core_services_section_cta_button_label" varchar,
  	"version_nursing_section_heading" varchar,
  	"version_nursing_section_subtitle" varchar,
  	"version_nursing_section_featured_image_id" integer,
  	"version_nursing_section_featured_heading" varchar,
  	"version_nursing_section_featured_body" varchar,
  	"version_rehabilitation_section_heading" varchar,
  	"version_rehabilitation_section_subtitle" varchar,
  	"version_rehabilitation_section_featured_image_id" integer,
  	"version_rehabilitation_section_featured_heading" varchar,
  	"version_rehabilitation_section_featured_body" varchar,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_services_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "facilities_showcase_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "facilities_showcase_feature_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_facilities_showcase_feature_grid_items_icon_name",
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "facilities_sustainability_initiatives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_facilities_sustainability_initiatives_icon_name",
  	"title" varchar,
  	"description" varchar,
  	"impact" varchar
  );
  
  CREATE TABLE "facilities_sustainability_showcase_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"caption" varchar,
  	"subcaption" varchar
  );
  
  CREATE TABLE "facilities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_quote" varchar,
  	"showcase_section_heading" varchar,
  	"showcase_section_subtitle" varchar,
  	"showcase_section_feature_grid_heading" varchar,
  	"sustainability_section_heading" varchar,
  	"sustainability_section_subtitle" varchar,
  	"sustainability_section_commitment_heading" varchar,
  	"sustainability_section_commitment_body" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "__facilities_v_showcase_highlights_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__facilities_v_showcase_feature_grid_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___facilities_v_showcase_feature_grid_items_v_icon_name",
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__facilities_v_sustainability_initiatives_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___facilities_v_sustainability_initiatives_v_icon_name",
  	"title" varchar,
  	"description" varchar,
  	"impact" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "__facilities_v_sustainability_showcase_images_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"caption" varchar,
  	"subcaption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_facilities_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_title" varchar,
  	"version_hero_subtitle" varchar,
  	"version_hero_quote" varchar,
  	"version_showcase_section_heading" varchar,
  	"version_showcase_section_subtitle" varchar,
  	"version_showcase_section_feature_grid_heading" varchar,
  	"version_sustainability_section_heading" varchar,
  	"version_sustainability_section_subtitle" varchar,
  	"version_sustainability_section_commitment_heading" varchar,
  	"version_sustainability_section_commitment_body" varchar,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_quote" varchar,
  	"board_section_heading" varchar,
  	"board_section_description" varchar,
  	"admin_section_heading" varchar,
  	"admin_section_description" varchar,
  	"staff_section_heading" varchar,
  	"staff_section_description" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_team_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_title" varchar,
  	"version_hero_subtitle" varchar,
  	"version_hero_quote" varchar,
  	"version_board_section_heading" varchar,
  	"version_board_section_description" varchar,
  	"version_admin_section_heading" varchar,
  	"version_admin_section_description" varchar,
  	"version_staff_section_heading" varchar,
  	"version_staff_section_description" varchar,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "donors_special_mentions_mentions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"icon_name" "enum_donors_special_mentions_mentions_icon_name" NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "donors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_subtitle" varchar NOT NULL,
  	"hero_quote" varchar NOT NULL,
  	"donor_wall_section_heading" varchar NOT NULL,
  	"donor_wall_section_subtitle" varchar NOT NULL,
  	"special_mentions_section_heading" varchar NOT NULL,
  	"special_mentions_section_subtitle" varchar NOT NULL,
  	"special_mentions_section_closing_message" varchar NOT NULL,
  	"seo_meta_title" varchar NOT NULL,
  	"seo_meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "__donors_v_special_mentions_mentions_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"icon_name" "enum___donors_v_special_mentions_mentions_v_icon_name" NOT NULL,
  	"description" varchar NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_donors_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_title" varchar NOT NULL,
  	"version_hero_subtitle" varchar NOT NULL,
  	"version_hero_quote" varchar NOT NULL,
  	"version_donor_wall_section_heading" varchar NOT NULL,
  	"version_donor_wall_section_subtitle" varchar NOT NULL,
  	"version_special_mentions_section_heading" varchar NOT NULL,
  	"version_special_mentions_section_subtitle" varchar NOT NULL,
  	"version_special_mentions_section_closing_message" varchar NOT NULL,
  	"version_seo_meta_title" varchar NOT NULL,
  	"version_seo_meta_description" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contact_info_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_contact_info_details_icon_name" NOT NULL,
  	"title" varchar NOT NULL,
  	"link" varchar
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_subtitle" varchar NOT NULL,
  	"hero_quote" varchar NOT NULL,
  	"form_section_heading" varchar NOT NULL,
  	"form_section_subheading" varchar NOT NULL,
  	"form_section_name_label" varchar NOT NULL,
  	"form_section_name_placeholder" varchar NOT NULL,
  	"form_section_email_label" varchar NOT NULL,
  	"form_section_email_placeholder" varchar NOT NULL,
  	"form_section_message_label" varchar NOT NULL,
  	"form_section_message_placeholder" varchar NOT NULL,
  	"form_section_message_help_text" varchar NOT NULL,
  	"form_section_submit_button_label" varchar NOT NULL,
  	"form_section_success_heading" varchar NOT NULL,
  	"form_section_success_body" varchar NOT NULL,
  	"form_section_error_heading" varchar NOT NULL,
  	"info_section_heading" varchar NOT NULL,
  	"info_section_subtitle" varchar NOT NULL,
  	"info_section_map_query" varchar NOT NULL,
  	"info_section_additional_info_heading" varchar NOT NULL,
  	"info_section_additional_info_body" varchar NOT NULL,
  	"seo_meta_title" varchar NOT NULL,
  	"seo_meta_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "__contact_v_info_details_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_name" "enum___contact_v_info_details_v_icon_name" NOT NULL,
  	"title" varchar NOT NULL,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_contact_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_title" varchar NOT NULL,
  	"version_hero_subtitle" varchar NOT NULL,
  	"version_hero_quote" varchar NOT NULL,
  	"version_form_section_heading" varchar NOT NULL,
  	"version_form_section_subheading" varchar NOT NULL,
  	"version_form_section_name_label" varchar NOT NULL,
  	"version_form_section_name_placeholder" varchar NOT NULL,
  	"version_form_section_email_label" varchar NOT NULL,
  	"version_form_section_email_placeholder" varchar NOT NULL,
  	"version_form_section_message_label" varchar NOT NULL,
  	"version_form_section_message_placeholder" varchar NOT NULL,
  	"version_form_section_message_help_text" varchar NOT NULL,
  	"version_form_section_submit_button_label" varchar NOT NULL,
  	"version_form_section_success_heading" varchar NOT NULL,
  	"version_form_section_success_body" varchar NOT NULL,
  	"version_form_section_error_heading" varchar NOT NULL,
  	"version_info_section_heading" varchar NOT NULL,
  	"version_info_section_subtitle" varchar NOT NULL,
  	"version_info_section_map_query" varchar NOT NULL,
  	"version_info_section_additional_info_heading" varchar NOT NULL,
  	"version_info_section_additional_info_body" varchar NOT NULL,
  	"version_seo_meta_title" varchar NOT NULL,
  	"version_seo_meta_description" varchar NOT NULL,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "_contact_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "privacy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_privacy_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_heading" varchar NOT NULL,
  	"version_body" varchar NOT NULL,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "terms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_terms_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_heading" varchar NOT NULL,
  	"version_body" varchar NOT NULL,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_parent_id_team_members_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."team_members"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "staff_photos" ADD CONSTRAINT "staff_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_staff_photos_v" ADD CONSTRAINT "_staff_photos_v_parent_id_staff_photos_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."staff_photos"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_staff_photos_v" ADD CONSTRAINT "_staff_photos_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "donor_years_texts" ADD CONSTRAINT "donor_years_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."donor_years"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_donor_years_v" ADD CONSTRAINT "_donor_years_v_parent_id_donor_years_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."donor_years"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_donor_years_v_texts" ADD CONSTRAINT "_donor_years_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_donor_years_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_staff_photos_fk" FOREIGN KEY ("staff_photos_id") REFERENCES "public"."staff_photos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_donor_years_fk" FOREIGN KEY ("donor_years_id") REFERENCES "public"."donor_years"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_services_cards" ADD CONSTRAINT "home_services_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_services_cards" ADD CONSTRAINT "home_services_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_hero_section_background_image_id_media_id_fk" FOREIGN KEY ("hero_section_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_section_founder_image_id_media_id_fk" FOREIGN KEY ("about_section_founder_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_texts" ADD CONSTRAINT "home_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__home_v_services_cards_v" ADD CONSTRAINT "__home_v_services_cards_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__home_v_services_cards_v" ADD CONSTRAINT "__home_v_services_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_hero_section_background_image_id_media_id_fk" FOREIGN KEY ("version_hero_section_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_about_section_founder_image_id_media_id_fk" FOREIGN KEY ("version_about_section_founder_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_texts" ADD CONSTRAINT "_home_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_establishment_why_choose_cards" ADD CONSTRAINT "about_establishment_why_choose_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_mission_vision_core_values" ADD CONSTRAINT "about_mission_vision_core_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about" ADD CONSTRAINT "about_establishment_section_founder_image_id_media_id_fk" FOREIGN KEY ("establishment_section_founder_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_texts" ADD CONSTRAINT "about_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__about_v_establishment_why_choose_cards_v" ADD CONSTRAINT "__about_v_establishment_why_choose_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__about_v_mission_vision_core_values_v" ADD CONSTRAINT "__about_v_mission_vision_core_values_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_v" ADD CONSTRAINT "_about_v_version_establishment_section_founder_imag_583b61a0_fk" FOREIGN KEY ("version_establishment_section_founder_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_v_texts" ADD CONSTRAINT "_about_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_about_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_core_services_services" ADD CONSTRAINT "services_core_services_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_nursing_feature_cards" ADD CONSTRAINT "services_nursing_feature_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_nursing_gallery_images" ADD CONSTRAINT "services_nursing_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_nursing_gallery_images" ADD CONSTRAINT "services_nursing_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rehabilitation_programs" ADD CONSTRAINT "services_rehabilitation_programs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rehabilitation_gallery_images" ADD CONSTRAINT "services_rehabilitation_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rehabilitation_gallery_images" ADD CONSTRAINT "services_rehabilitation_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_nursing_section_featured_image_id_media_id_fk" FOREIGN KEY ("nursing_section_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_rehabilitation_section_featured_image_id_media_id_fk" FOREIGN KEY ("rehabilitation_section_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_texts" ADD CONSTRAINT "services_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_core_services_services_v" ADD CONSTRAINT "__services_v_core_services_services_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_nursing_feature_cards_v" ADD CONSTRAINT "__services_v_nursing_feature_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_nursing_gallery_images_v" ADD CONSTRAINT "__services_v_nursing_gallery_images_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__services_v_nursing_gallery_images_v" ADD CONSTRAINT "__services_v_nursing_gallery_images_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_rehabilitation_programs_v" ADD CONSTRAINT "__services_v_rehabilitation_programs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_rehabilitation_gallery_images_v" ADD CONSTRAINT "__services_v_rehabilitation_gallery_images_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__services_v_rehabilitation_gallery_images_v" ADD CONSTRAINT "__services_v_rehabilitation_gallery_images_v_image__3e82c16e_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_nursing_section_featured_image__3e746513_fk" FOREIGN KEY ("version_nursing_section_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_rehabilitation_section_featured_3e9e3786_fk" FOREIGN KEY ("version_rehabilitation_section_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_texts" ADD CONSTRAINT "_services_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "facilities_showcase_highlights" ADD CONSTRAINT "facilities_showcase_highlights_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "facilities_showcase_highlights" ADD CONSTRAINT "facilities_showcase_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."facilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "facilities_showcase_feature_grid_items" ADD CONSTRAINT "facilities_showcase_feature_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."facilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "facilities_sustainability_initiatives" ADD CONSTRAINT "facilities_sustainability_initiatives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."facilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "facilities_sustainability_showcase_images" ADD CONSTRAINT "facilities_sustainability_showcase_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "facilities_sustainability_showcase_images" ADD CONSTRAINT "facilities_sustainability_showcase_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."facilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__facilities_v_showcase_highlights_v" ADD CONSTRAINT "__facilities_v_showcase_highlights_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "__facilities_v_showcase_highlights_v" ADD CONSTRAINT "__facilities_v_showcase_highlights_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_facilities_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__facilities_v_showcase_feature_grid_items_v" ADD CONSTRAINT "__facilities_v_showcase_feature_grid_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_facilities_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__facilities_v_sustainability_initiatives_v" ADD CONSTRAINT "__facilities_v_sustainability_initiatives_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_facilities_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__facilities_v_sustainability_showcase_images_v" ADD CONSTRAINT "__facilities_v_sustainability_showcase_images_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_facilities_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__facilities_v_sustainability_showcase_images_v" ADD CONSTRAINT "__facilities_v_sustainability_showcase_images_v_ima_5f70941a_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "donors_special_mentions_mentions" ADD CONSTRAINT "donors_special_mentions_mentions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."donors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__donors_v_special_mentions_mentions_v" ADD CONSTRAINT "__donors_v_special_mentions_mentions_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_donors_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_info_details" ADD CONSTRAINT "contact_info_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_texts" ADD CONSTRAINT "contact_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "__contact_v_info_details_v" ADD CONSTRAINT "__contact_v_info_details_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_v_texts" ADD CONSTRAINT "_contact_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_contact_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "team_members_image_idx" ON "team_members" USING btree ("image_id");
  CREATE INDEX "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
  CREATE INDEX "team_members_created_at_idx" ON "team_members" USING btree ("created_at");
  CREATE INDEX "_team_members_v_parent_idx" ON "_team_members_v" USING btree ("parent_id");
  CREATE INDEX "_team_members_v_version_version_image_idx" ON "_team_members_v" USING btree ("version_image_id");
  CREATE INDEX "_team_members_v_version_version_updated_at_idx" ON "_team_members_v" USING btree ("version_updated_at");
  CREATE INDEX "_team_members_v_version_version_created_at_idx" ON "_team_members_v" USING btree ("version_created_at");
  CREATE INDEX "_team_members_v_created_at_idx" ON "_team_members_v" USING btree ("created_at");
  CREATE INDEX "_team_members_v_updated_at_idx" ON "_team_members_v" USING btree ("updated_at");
  CREATE INDEX "staff_photos_image_idx" ON "staff_photos" USING btree ("image_id");
  CREATE INDEX "staff_photos_updated_at_idx" ON "staff_photos" USING btree ("updated_at");
  CREATE INDEX "staff_photos_created_at_idx" ON "staff_photos" USING btree ("created_at");
  CREATE INDEX "_staff_photos_v_parent_idx" ON "_staff_photos_v" USING btree ("parent_id");
  CREATE INDEX "_staff_photos_v_version_version_image_idx" ON "_staff_photos_v" USING btree ("version_image_id");
  CREATE INDEX "_staff_photos_v_version_version_updated_at_idx" ON "_staff_photos_v" USING btree ("version_updated_at");
  CREATE INDEX "_staff_photos_v_version_version_created_at_idx" ON "_staff_photos_v" USING btree ("version_created_at");
  CREATE INDEX "_staff_photos_v_created_at_idx" ON "_staff_photos_v" USING btree ("created_at");
  CREATE INDEX "_staff_photos_v_updated_at_idx" ON "_staff_photos_v" USING btree ("updated_at");
  CREATE INDEX "donor_years_updated_at_idx" ON "donor_years" USING btree ("updated_at");
  CREATE INDEX "donor_years_created_at_idx" ON "donor_years" USING btree ("created_at");
  CREATE INDEX "donor_years_texts_order_parent" ON "donor_years_texts" USING btree ("order","parent_id");
  CREATE INDEX "_donor_years_v_parent_idx" ON "_donor_years_v" USING btree ("parent_id");
  CREATE INDEX "_donor_years_v_version_version_updated_at_idx" ON "_donor_years_v" USING btree ("version_updated_at");
  CREATE INDEX "_donor_years_v_version_version_created_at_idx" ON "_donor_years_v" USING btree ("version_created_at");
  CREATE INDEX "_donor_years_v_created_at_idx" ON "_donor_years_v" USING btree ("created_at");
  CREATE INDEX "_donor_years_v_updated_at_idx" ON "_donor_years_v" USING btree ("updated_at");
  CREATE INDEX "_donor_years_v_texts_order_parent" ON "_donor_years_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  CREATE INDEX "payload_locked_documents_rels_staff_photos_id_idx" ON "payload_locked_documents_rels" USING btree ("staff_photos_id");
  CREATE INDEX "payload_locked_documents_rels_donor_years_id_idx" ON "payload_locked_documents_rels" USING btree ("donor_years_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_services_cards_order_idx" ON "home_services_cards" USING btree ("_order");
  CREATE INDEX "home_services_cards_parent_id_idx" ON "home_services_cards" USING btree ("_parent_id");
  CREATE INDEX "home_services_cards_image_idx" ON "home_services_cards" USING btree ("image_id");
  CREATE INDEX "home_hero_section_hero_section_background_image_idx" ON "home" USING btree ("hero_section_background_image_id");
  CREATE INDEX "home_about_section_about_section_founder_image_idx" ON "home" USING btree ("about_section_founder_image_id");
  CREATE INDEX "home_texts_order_parent" ON "home_texts" USING btree ("order","parent_id");
  CREATE INDEX "__home_v_services_cards_v_order_idx" ON "__home_v_services_cards_v" USING btree ("_order");
  CREATE INDEX "__home_v_services_cards_v_parent_id_idx" ON "__home_v_services_cards_v" USING btree ("_parent_id");
  CREATE INDEX "__home_v_services_cards_v_image_idx" ON "__home_v_services_cards_v" USING btree ("image_id");
  CREATE INDEX "_home_v_version_hero_section_version_hero_section_backgr_idx" ON "_home_v" USING btree ("version_hero_section_background_image_id");
  CREATE INDEX "_home_v_version_about_section_version_about_section_foun_idx" ON "_home_v" USING btree ("version_about_section_founder_image_id");
  CREATE INDEX "_home_v_created_at_idx" ON "_home_v" USING btree ("created_at");
  CREATE INDEX "_home_v_updated_at_idx" ON "_home_v" USING btree ("updated_at");
  CREATE INDEX "_home_v_texts_order_parent" ON "_home_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "about_establishment_why_choose_cards_order_idx" ON "about_establishment_why_choose_cards" USING btree ("_order");
  CREATE INDEX "about_establishment_why_choose_cards_parent_id_idx" ON "about_establishment_why_choose_cards" USING btree ("_parent_id");
  CREATE INDEX "about_mission_vision_core_values_order_idx" ON "about_mission_vision_core_values" USING btree ("_order");
  CREATE INDEX "about_mission_vision_core_values_parent_id_idx" ON "about_mission_vision_core_values" USING btree ("_parent_id");
  CREATE INDEX "about_establishment_section_establishment_section_founde_idx" ON "about" USING btree ("establishment_section_founder_image_id");
  CREATE INDEX "about_texts_order_parent" ON "about_texts" USING btree ("order","parent_id");
  CREATE INDEX "__about_v_establishment_why_choose_cards_v_order_idx" ON "__about_v_establishment_why_choose_cards_v" USING btree ("_order");
  CREATE INDEX "__about_v_establishment_why_choose_cards_v_parent_id_idx" ON "__about_v_establishment_why_choose_cards_v" USING btree ("_parent_id");
  CREATE INDEX "__about_v_mission_vision_core_values_v_order_idx" ON "__about_v_mission_vision_core_values_v" USING btree ("_order");
  CREATE INDEX "__about_v_mission_vision_core_values_v_parent_id_idx" ON "__about_v_mission_vision_core_values_v" USING btree ("_parent_id");
  CREATE INDEX "_about_v_version_establishment_section_version_establish_idx" ON "_about_v" USING btree ("version_establishment_section_founder_image_id");
  CREATE INDEX "_about_v_created_at_idx" ON "_about_v" USING btree ("created_at");
  CREATE INDEX "_about_v_updated_at_idx" ON "_about_v" USING btree ("updated_at");
  CREATE INDEX "_about_v_texts_order_parent" ON "_about_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "services_core_services_services_order_idx" ON "services_core_services_services" USING btree ("_order");
  CREATE INDEX "services_core_services_services_parent_id_idx" ON "services_core_services_services" USING btree ("_parent_id");
  CREATE INDEX "services_nursing_feature_cards_order_idx" ON "services_nursing_feature_cards" USING btree ("_order");
  CREATE INDEX "services_nursing_feature_cards_parent_id_idx" ON "services_nursing_feature_cards" USING btree ("_parent_id");
  CREATE INDEX "services_nursing_gallery_images_order_idx" ON "services_nursing_gallery_images" USING btree ("_order");
  CREATE INDEX "services_nursing_gallery_images_parent_id_idx" ON "services_nursing_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "services_nursing_gallery_images_image_idx" ON "services_nursing_gallery_images" USING btree ("image_id");
  CREATE INDEX "services_rehabilitation_programs_order_idx" ON "services_rehabilitation_programs" USING btree ("_order");
  CREATE INDEX "services_rehabilitation_programs_parent_id_idx" ON "services_rehabilitation_programs" USING btree ("_parent_id");
  CREATE INDEX "services_rehabilitation_gallery_images_order_idx" ON "services_rehabilitation_gallery_images" USING btree ("_order");
  CREATE INDEX "services_rehabilitation_gallery_images_parent_id_idx" ON "services_rehabilitation_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "services_rehabilitation_gallery_images_image_idx" ON "services_rehabilitation_gallery_images" USING btree ("image_id");
  CREATE INDEX "services_nursing_section_nursing_section_featured_image_idx" ON "services" USING btree ("nursing_section_featured_image_id");
  CREATE INDEX "services_rehabilitation_section_rehabilitation_section_f_idx" ON "services" USING btree ("rehabilitation_section_featured_image_id");
  CREATE INDEX "services_texts_order_parent" ON "services_texts" USING btree ("order","parent_id");
  CREATE INDEX "__services_v_core_services_services_v_order_idx" ON "__services_v_core_services_services_v" USING btree ("_order");
  CREATE INDEX "__services_v_core_services_services_v_parent_id_idx" ON "__services_v_core_services_services_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_nursing_feature_cards_v_order_idx" ON "__services_v_nursing_feature_cards_v" USING btree ("_order");
  CREATE INDEX "__services_v_nursing_feature_cards_v_parent_id_idx" ON "__services_v_nursing_feature_cards_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_nursing_gallery_images_v_order_idx" ON "__services_v_nursing_gallery_images_v" USING btree ("_order");
  CREATE INDEX "__services_v_nursing_gallery_images_v_parent_id_idx" ON "__services_v_nursing_gallery_images_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_nursing_gallery_images_v_image_idx" ON "__services_v_nursing_gallery_images_v" USING btree ("image_id");
  CREATE INDEX "__services_v_rehabilitation_programs_v_order_idx" ON "__services_v_rehabilitation_programs_v" USING btree ("_order");
  CREATE INDEX "__services_v_rehabilitation_programs_v_parent_id_idx" ON "__services_v_rehabilitation_programs_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_rehabilitation_gallery_images_v_order_idx" ON "__services_v_rehabilitation_gallery_images_v" USING btree ("_order");
  CREATE INDEX "__services_v_rehabilitation_gallery_images_v_parent_id_idx" ON "__services_v_rehabilitation_gallery_images_v" USING btree ("_parent_id");
  CREATE INDEX "__services_v_rehabilitation_gallery_images_v_image_idx" ON "__services_v_rehabilitation_gallery_images_v" USING btree ("image_id");
  CREATE INDEX "_services_v_version_nursing_section_version_nursing_sect_idx" ON "_services_v" USING btree ("version_nursing_section_featured_image_id");
  CREATE INDEX "_services_v_version_rehabilitation_section_version_rehab_idx" ON "_services_v" USING btree ("version_rehabilitation_section_featured_image_id");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_texts_order_parent" ON "_services_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "facilities_showcase_highlights_order_idx" ON "facilities_showcase_highlights" USING btree ("_order");
  CREATE INDEX "facilities_showcase_highlights_parent_id_idx" ON "facilities_showcase_highlights" USING btree ("_parent_id");
  CREATE INDEX "facilities_showcase_highlights_image_idx" ON "facilities_showcase_highlights" USING btree ("image_id");
  CREATE INDEX "facilities_showcase_feature_grid_items_order_idx" ON "facilities_showcase_feature_grid_items" USING btree ("_order");
  CREATE INDEX "facilities_showcase_feature_grid_items_parent_id_idx" ON "facilities_showcase_feature_grid_items" USING btree ("_parent_id");
  CREATE INDEX "facilities_sustainability_initiatives_order_idx" ON "facilities_sustainability_initiatives" USING btree ("_order");
  CREATE INDEX "facilities_sustainability_initiatives_parent_id_idx" ON "facilities_sustainability_initiatives" USING btree ("_parent_id");
  CREATE INDEX "facilities_sustainability_showcase_images_order_idx" ON "facilities_sustainability_showcase_images" USING btree ("_order");
  CREATE INDEX "facilities_sustainability_showcase_images_parent_id_idx" ON "facilities_sustainability_showcase_images" USING btree ("_parent_id");
  CREATE INDEX "facilities_sustainability_showcase_images_image_idx" ON "facilities_sustainability_showcase_images" USING btree ("image_id");
  CREATE INDEX "__facilities_v_showcase_highlights_v_order_idx" ON "__facilities_v_showcase_highlights_v" USING btree ("_order");
  CREATE INDEX "__facilities_v_showcase_highlights_v_parent_id_idx" ON "__facilities_v_showcase_highlights_v" USING btree ("_parent_id");
  CREATE INDEX "__facilities_v_showcase_highlights_v_image_idx" ON "__facilities_v_showcase_highlights_v" USING btree ("image_id");
  CREATE INDEX "__facilities_v_showcase_feature_grid_items_v_order_idx" ON "__facilities_v_showcase_feature_grid_items_v" USING btree ("_order");
  CREATE INDEX "__facilities_v_showcase_feature_grid_items_v_parent_id_idx" ON "__facilities_v_showcase_feature_grid_items_v" USING btree ("_parent_id");
  CREATE INDEX "__facilities_v_sustainability_initiatives_v_order_idx" ON "__facilities_v_sustainability_initiatives_v" USING btree ("_order");
  CREATE INDEX "__facilities_v_sustainability_initiatives_v_parent_id_idx" ON "__facilities_v_sustainability_initiatives_v" USING btree ("_parent_id");
  CREATE INDEX "__facilities_v_sustainability_showcase_images_v_order_idx" ON "__facilities_v_sustainability_showcase_images_v" USING btree ("_order");
  CREATE INDEX "__facilities_v_sustainability_showcase_images_v_parent_id_idx" ON "__facilities_v_sustainability_showcase_images_v" USING btree ("_parent_id");
  CREATE INDEX "__facilities_v_sustainability_showcase_images_v_image_idx" ON "__facilities_v_sustainability_showcase_images_v" USING btree ("image_id");
  CREATE INDEX "_facilities_v_created_at_idx" ON "_facilities_v" USING btree ("created_at");
  CREATE INDEX "_facilities_v_updated_at_idx" ON "_facilities_v" USING btree ("updated_at");
  CREATE INDEX "_team_v_created_at_idx" ON "_team_v" USING btree ("created_at");
  CREATE INDEX "_team_v_updated_at_idx" ON "_team_v" USING btree ("updated_at");
  CREATE INDEX "donors_special_mentions_mentions_order_idx" ON "donors_special_mentions_mentions" USING btree ("_order");
  CREATE INDEX "donors_special_mentions_mentions_parent_id_idx" ON "donors_special_mentions_mentions" USING btree ("_parent_id");
  CREATE INDEX "__donors_v_special_mentions_mentions_v_order_idx" ON "__donors_v_special_mentions_mentions_v" USING btree ("_order");
  CREATE INDEX "__donors_v_special_mentions_mentions_v_parent_id_idx" ON "__donors_v_special_mentions_mentions_v" USING btree ("_parent_id");
  CREATE INDEX "_donors_v_created_at_idx" ON "_donors_v" USING btree ("created_at");
  CREATE INDEX "_donors_v_updated_at_idx" ON "_donors_v" USING btree ("updated_at");
  CREATE INDEX "contact_info_details_order_idx" ON "contact_info_details" USING btree ("_order");
  CREATE INDEX "contact_info_details_parent_id_idx" ON "contact_info_details" USING btree ("_parent_id");
  CREATE INDEX "contact_texts_order_parent" ON "contact_texts" USING btree ("order","parent_id");
  CREATE INDEX "__contact_v_info_details_v_order_idx" ON "__contact_v_info_details_v" USING btree ("_order");
  CREATE INDEX "__contact_v_info_details_v_parent_id_idx" ON "__contact_v_info_details_v" USING btree ("_parent_id");
  CREATE INDEX "_contact_v_created_at_idx" ON "_contact_v" USING btree ("created_at");
  CREATE INDEX "_contact_v_updated_at_idx" ON "_contact_v" USING btree ("updated_at");
  CREATE INDEX "_contact_v_texts_order_parent" ON "_contact_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_privacy_v_created_at_idx" ON "_privacy_v" USING btree ("created_at");
  CREATE INDEX "_privacy_v_updated_at_idx" ON "_privacy_v" USING btree ("updated_at");
  CREATE INDEX "_terms_v_created_at_idx" ON "_terms_v" USING btree ("created_at");
  CREATE INDEX "_terms_v_updated_at_idx" ON "_terms_v" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "team_members" CASCADE;
  DROP TABLE "_team_members_v" CASCADE;
  DROP TABLE "staff_photos" CASCADE;
  DROP TABLE "_staff_photos_v" CASCADE;
  DROP TABLE "donor_years" CASCADE;
  DROP TABLE "donor_years_texts" CASCADE;
  DROP TABLE "_donor_years_v" CASCADE;
  DROP TABLE "_donor_years_v_texts" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_services_cards" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_texts" CASCADE;
  DROP TABLE "__home_v_services_cards_v" CASCADE;
  DROP TABLE "_home_v" CASCADE;
  DROP TABLE "_home_v_texts" CASCADE;
  DROP TABLE "about_establishment_why_choose_cards" CASCADE;
  DROP TABLE "about_mission_vision_core_values" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "about_texts" CASCADE;
  DROP TABLE "__about_v_establishment_why_choose_cards_v" CASCADE;
  DROP TABLE "__about_v_mission_vision_core_values_v" CASCADE;
  DROP TABLE "_about_v" CASCADE;
  DROP TABLE "_about_v_texts" CASCADE;
  DROP TABLE "services_core_services_services" CASCADE;
  DROP TABLE "services_nursing_feature_cards" CASCADE;
  DROP TABLE "services_nursing_gallery_images" CASCADE;
  DROP TABLE "services_rehabilitation_programs" CASCADE;
  DROP TABLE "services_rehabilitation_gallery_images" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_texts" CASCADE;
  DROP TABLE "__services_v_core_services_services_v" CASCADE;
  DROP TABLE "__services_v_nursing_feature_cards_v" CASCADE;
  DROP TABLE "__services_v_nursing_gallery_images_v" CASCADE;
  DROP TABLE "__services_v_rehabilitation_programs_v" CASCADE;
  DROP TABLE "__services_v_rehabilitation_gallery_images_v" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_texts" CASCADE;
  DROP TABLE "facilities_showcase_highlights" CASCADE;
  DROP TABLE "facilities_showcase_feature_grid_items" CASCADE;
  DROP TABLE "facilities_sustainability_initiatives" CASCADE;
  DROP TABLE "facilities_sustainability_showcase_images" CASCADE;
  DROP TABLE "facilities" CASCADE;
  DROP TABLE "__facilities_v_showcase_highlights_v" CASCADE;
  DROP TABLE "__facilities_v_showcase_feature_grid_items_v" CASCADE;
  DROP TABLE "__facilities_v_sustainability_initiatives_v" CASCADE;
  DROP TABLE "__facilities_v_sustainability_showcase_images_v" CASCADE;
  DROP TABLE "_facilities_v" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "_team_v" CASCADE;
  DROP TABLE "donors_special_mentions_mentions" CASCADE;
  DROP TABLE "donors" CASCADE;
  DROP TABLE "__donors_v_special_mentions_mentions_v" CASCADE;
  DROP TABLE "_donors_v" CASCADE;
  DROP TABLE "contact_info_details" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "contact_texts" CASCADE;
  DROP TABLE "__contact_v_info_details_v" CASCADE;
  DROP TABLE "_contact_v" CASCADE;
  DROP TABLE "_contact_v_texts" CASCADE;
  DROP TABLE "privacy" CASCADE;
  DROP TABLE "_privacy_v" CASCADE;
  DROP TABLE "terms" CASCADE;
  DROP TABLE "_terms_v" CASCADE;
  DROP TYPE "public"."enum_team_members_department";
  DROP TYPE "public"."enum__team_members_v_department";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_home_services_cards_icon_name";
  DROP TYPE "public"."enum___home_v_services_cards_v_icon_name";
  DROP TYPE "public"."enum_about_establishment_why_choose_cards_icon_name";
  DROP TYPE "public"."enum_about_mission_vision_core_values_icon_name";
  DROP TYPE "public"."enum___about_v_establishment_why_choose_cards_v_icon_name";
  DROP TYPE "public"."enum___about_v_mission_vision_core_values_v_icon_name";
  DROP TYPE "public"."enum_services_core_services_services_icon_name";
  DROP TYPE "public"."enum_services_nursing_feature_cards_icon_name";
  DROP TYPE "public"."enum___services_v_core_services_services_v_icon_name";
  DROP TYPE "public"."enum___services_v_nursing_feature_cards_v_icon_name";
  DROP TYPE "public"."enum_facilities_showcase_feature_grid_items_icon_name";
  DROP TYPE "public"."enum_facilities_sustainability_initiatives_icon_name";
  DROP TYPE "public"."enum___facilities_v_showcase_feature_grid_items_v_icon_name";
  DROP TYPE "public"."enum___facilities_v_sustainability_initiatives_v_icon_name";
  DROP TYPE "public"."enum_donors_special_mentions_mentions_icon_name";
  DROP TYPE "public"."enum___donors_v_special_mentions_mentions_v_icon_name";
  DROP TYPE "public"."enum_contact_info_details_icon_name";
  DROP TYPE "public"."enum___contact_v_info_details_v_icon_name";`)
}
