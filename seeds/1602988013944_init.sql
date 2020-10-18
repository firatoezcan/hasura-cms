INSERT INTO public.users (id, email, first_name, last_name) VALUES ('050ef896-ad4b-4187-932e-23c89855f59f', 'user.owner@example.com', 'Max', 'Mustermann');
INSERT INTO public.users (id, email, first_name, last_name) VALUES ('105dd43e-e93d-4c95-9c3f-251ed7b15188', 'user.owner.and.collaborator@example.com', 'Firat', 'Collab');
INSERT INTO public.projects (id, owner_id, name, description) VALUES ('7cdebd6b-cd7f-4b3c-9b97-ac292ae09525', '050ef896-ad4b-4187-932e-23c89855f59f', 'Test Project 1', 'With collaborators');
INSERT INTO public.projects (id, owner_id, name, description) VALUES ('5603451e-2cb5-4626-9266-4ddcd6913364', '105dd43e-e93d-4c95-9c3f-251ed7b15188', 'Second Project', 'Testing model inserts');
INSERT INTO public.roles (id, api_name, display_name, project_id) VALUES ('b8473cda-5522-494e-a1d8-230d90fe53c7', 'editor', 'Editor', '7cdebd6b-cd7f-4b3c-9b97-ac292ae09525');
INSERT INTO public.collaborators (id, project_id, user_id, role_id) VALUES ('3ed8d8f5-f84c-45a2-8419-9053f71fd195', '7cdebd6b-cd7f-4b3c-9b97-ac292ae09525', '105dd43e-e93d-4c95-9c3f-251ed7b15188', 'b8473cda-5522-494e-a1d8-230d90fe53c7');
INSERT INTO public.models (id, display_name, api_name, project_id) VALUES ('2e8a2406-2d93-477d-b5ea-919d09ba982b', 'Model 1', 'modelOne', '7cdebd6b-cd7f-4b3c-9b97-ac292ae09525');
INSERT INTO public.models (id, display_name, api_name, project_id) VALUES ('e150e027-e934-4913-9766-7236b8e8ee25', 'Editor Model', 'editorModel', '5603451e-2cb5-4626-9266-4ddcd6913364');
INSERT INTO public.file_field (id, "position", model_id, display_name, api_name, description, required, hidden) VALUES ('d75d29c0-9fae-4bf9-a1fa-d4048746a4fd', 0, '2e8a2406-2d93-477d-b5ea-919d09ba982b', 'Picture', 'picture', NULL, false, false);
