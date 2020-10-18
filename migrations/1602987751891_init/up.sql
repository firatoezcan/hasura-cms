CREATE TYPE public.grants AS ENUM (
    'change_project',
    'create_roles',
    'read_roles',
    'update_roles',
    'delete_roles',
    'invite_collaborator',
    'remove_collaborator',
    'change_collaborator_role',
    'create_env',
    'read_env',
    'update_env',
    'delete_env',
    'create_models',
    'read_models',
    'update_models',
    'delete_models',
    'create_enumerations',
    'read_enumerations',
    'update_enumerations',
    'delete_enumerations',
    'create_fields',
    'read_fields',
    'update_fields',
    'delete_fields',
    'create_entries',
    'read_entries',
    'delete_entries',
    'update_unpublished_entries',
    'update_entries',
    'publish_entries',
    'create_views',
    'read_views',
    'update_views',
    'delete_views',
    'create_tokens',
    'read_tokens',
    'update_tokens',
    'delete_tokens',
    'create_webhooks',
    'read_webhooks',
    'update_webhooks',
    'delete_webhooks',
    'create_integrations',
    'read_integrations',
    'update_integrations',
    'delete_integrations',
    'use_playground',
    'create_view_groups',
    'read_view_groups',
    'update_view_groups',
    'delete_view_groups',
    'create_locales',
    'read_locales',
    'update_locales',
    'delete_locales',
    'create_stages',
    'read_stages',
    'update_stages',
    'delete_stages',
    'read_logs'
);
CREATE TYPE public.mime_types AS ENUM (
    'text/csv',
    'image/gif',
    'image/vnd.microsoft.icon',
    'image/jpeg',
    'application/json',
    'audio/mpeg',
    'video/mpeg',
    'image/png',
    'application/pdf',
    'image/svg+xml',
    'font/ttf',
    'text/plain',
    'audio/webm',
    'video/webm',
    'image/webp',
    'font/woff',
    'font/woff2',
    'application/xml'
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    email text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL
);
CREATE FUNCTION public.me(hasura_session json) RETURNS SETOF public.users
    LANGUAGE sql STABLE
    AS $$
    SELECT *
    FROM users
    WHERE
      id = (hasura_session ->> 'x-hasura-user-id')::uuid
$$;
CREATE TABLE public.collaborators (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    project_id uuid NOT NULL,
    user_id uuid NOT NULL,
    role_id uuid NOT NULL
);
CREATE TABLE public.entries (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    model_id uuid NOT NULL,
    status_id uuid NOT NULL
);
COMMENT ON COLUMN public.entries.status_id IS 'Needs an on_insert trigger to automatically generate the status row';
CREATE TABLE public.entry_status (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    published boolean DEFAULT false NOT NULL,
    entry_id uuid NOT NULL
);
CREATE TABLE public.file_field (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "position" integer,
    model_id uuid NOT NULL,
    display_name text NOT NULL,
    api_name text NOT NULL,
    description text,
    required boolean DEFAULT false NOT NULL,
    hidden boolean DEFAULT false NOT NULL
);
COMMENT ON COLUMN public.file_field."position" IS 'Somehow constrained';
CREATE TABLE public.file_field_content (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    field_id uuid NOT NULL,
    file_location text NOT NULL,
    file_name text NOT NULL,
    size integer NOT NULL,
    width double precision,
    height double precision,
    mime_type public.mime_types NOT NULL,
    entry_id uuid NOT NULL
);
COMMENT ON COLUMN public.file_field_content.size IS 'In bytes';
CREATE TABLE public.models (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    display_name text NOT NULL,
    api_name text NOT NULL,
    project_id uuid NOT NULL
);
CREATE TABLE public.multi_line_field (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "position" integer,
    model_id uuid NOT NULL,
    display_name text NOT NULL,
    api_name text NOT NULL,
    description text,
    required boolean DEFAULT false NOT NULL,
    hidden boolean DEFAULT false NOT NULL
);
COMMENT ON COLUMN public.multi_line_field."position" IS 'Somehow constrained';
CREATE TABLE public.multi_line_field_content (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    field_id uuid NOT NULL,
    content text,
    entry_id uuid NOT NULL
);
CREATE TABLE public.projects (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    owner_id uuid NOT NULL,
    name text NOT NULL,
    description text
);
CREATE TABLE public.role_grants (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "grant" public.grants NOT NULL,
    role_id uuid NOT NULL
);
CREATE TABLE public.roles (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    api_name text NOT NULL,
    display_name text NOT NULL,
    project_id uuid NOT NULL
);
CREATE TABLE public.single_line_field (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "position" integer,
    model_id uuid NOT NULL,
    display_name text NOT NULL,
    api_name text NOT NULL,
    description text,
    required boolean DEFAULT false NOT NULL,
    hidden boolean DEFAULT false NOT NULL
);
COMMENT ON COLUMN public.single_line_field."position" IS 'Somehow constrained';
CREATE TABLE public.single_line_field_content (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    field_id uuid NOT NULL,
    content text,
    entry_id uuid NOT NULL
);
ALTER TABLE ONLY public.collaborators
    ADD CONSTRAINT collaborators_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.entry_status
    ADD CONSTRAINT entry_status_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.file_field_content
    ADD CONSTRAINT file_field_content_file_location_key UNIQUE (file_location);
ALTER TABLE ONLY public.file_field_content
    ADD CONSTRAINT file_field_content_id_key UNIQUE (id);
ALTER TABLE ONLY public.file_field_content
    ADD CONSTRAINT file_field_content_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.file_field
    ADD CONSTRAINT file_field_id_key UNIQUE (id);
ALTER TABLE ONLY public.file_field
    ADD CONSTRAINT file_field_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_api_id_key UNIQUE (api_name);
ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_display_name_key UNIQUE (display_name);
ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_id_key UNIQUE (id);
ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.multi_line_field_content
    ADD CONSTRAINT multi_line_field_content_id_key UNIQUE (id);
ALTER TABLE ONLY public.multi_line_field_content
    ADD CONSTRAINT multi_line_field_content_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.multi_line_field
    ADD CONSTRAINT multi_line_field_id_key UNIQUE (id);
ALTER TABLE ONLY public.multi_line_field
    ADD CONSTRAINT multi_line_field_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.role_grants
    ADD CONSTRAINT role_grants_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.single_line_field_content
    ADD CONSTRAINT single_line_field_content_id_key UNIQUE (id);
ALTER TABLE ONLY public.single_line_field_content
    ADD CONSTRAINT single_line_field_content_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.single_line_field
    ADD CONSTRAINT single_line_field_id_key UNIQUE (id);
ALTER TABLE ONLY public.single_line_field
    ADD CONSTRAINT single_line_field_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.collaborators
    ADD CONSTRAINT collaborators_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id);
ALTER TABLE ONLY public.collaborators
    ADD CONSTRAINT collaborators_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
ALTER TABLE ONLY public.collaborators
    ADD CONSTRAINT collaborators_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_model_id_fkey FOREIGN KEY (model_id) REFERENCES public.models(id);
ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_status_id_fkey FOREIGN KEY (status_id) REFERENCES public.entry_status(id);
ALTER TABLE ONLY public.entry_status
    ADD CONSTRAINT entry_status_entry_id_fkey FOREIGN KEY (entry_id) REFERENCES public.entries(id);
ALTER TABLE ONLY public.file_field_content
    ADD CONSTRAINT file_field_content_entry_id_fkey FOREIGN KEY (entry_id) REFERENCES public.entries(id);
ALTER TABLE ONLY public.file_field_content
    ADD CONSTRAINT file_field_content_parent_field_fkey FOREIGN KEY (field_id) REFERENCES public.file_field(id);
ALTER TABLE ONLY public.file_field
    ADD CONSTRAINT file_field_model_fkey FOREIGN KEY (model_id) REFERENCES public.models(id);
ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id);
ALTER TABLE ONLY public.multi_line_field_content
    ADD CONSTRAINT multi_line_field_content_entry_id_fkey FOREIGN KEY (entry_id) REFERENCES public.entries(id);
ALTER TABLE ONLY public.multi_line_field_content
    ADD CONSTRAINT multi_line_field_content_parent_field_fkey FOREIGN KEY (field_id) REFERENCES public.multi_line_field(id);
ALTER TABLE ONLY public.multi_line_field
    ADD CONSTRAINT multi_line_field_model_fkey FOREIGN KEY (model_id) REFERENCES public.models(id);
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.users(id);
ALTER TABLE ONLY public.role_grants
    ADD CONSTRAINT role_grants_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id);
ALTER TABLE ONLY public.single_line_field_content
    ADD CONSTRAINT single_line_field_content_entry_id_fkey FOREIGN KEY (entry_id) REFERENCES public.entries(id);
ALTER TABLE ONLY public.single_line_field_content
    ADD CONSTRAINT single_line_field_content_parent_field_fkey FOREIGN KEY (field_id) REFERENCES public.single_line_field(id);
ALTER TABLE ONLY public.single_line_field
    ADD CONSTRAINT single_line_field_model_fkey FOREIGN KEY (model_id) REFERENCES public.models(id);
