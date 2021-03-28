Schema with permissions for GraphCMS-like handling of content types  
Automatically exposed GraphQL API via Hasura

## Installation

You need:

- `docker`
- `docker-compose`
- `yarn`, `npm` also works but you would need to change the commands in `Makefile`

**Important!!:** Change the secrets within `.env.example` and then rename it to `.env` and run `make cp-env`
Run `make install` followed by `docker-compose up -d`
This should start the initial setup and migration for Hasura/Postgres
You can start the web services via `make dev` and build/serve them via `make build/serve` respectively

The console is started with `sh hasura-console.sh` to enable automatic generation of migration files on change  
The admin secret can be found within the `.env.example` file

You can shut everything down with `docker-compose down`

A good example query could be the following:

```graphql
query Example {
  users {
    email
    first_name
    last_name
    owned_projects {
      name
      models {
        api_name
        display_name
        project_id
        id
        file_fields {
          id
          api_name
          description
          display_name
          position
        }
        multi_line_fields {
          id
          api_name
          description
          display_name
          position
        }
        single_line_fields {
          id
          api_name
          description
          display_name
          position
        }
        entries {
          file_field_contents {
            id
          }
        }
      }
      collaborators {
        user {
          email
          first_name
          last_name
        }
      }
    }
    collaborator_in {
      project {
        name
        models {
          api_name
          display_name
          project_id
          id
          file_fields {
            id
            api_name
            description
            display_name
            position
          }
          multi_line_fields {
            id
            api_name
            description
            display_name
            position
          }
          single_line_fields {
            id
            api_name
            description
            display_name
            position
          }
          entries {
            file_field_contents {
              id
            }
          }
        }
        collaborators {
          user {
            email
            first_name
            last_name
          }
        }
      }
    }
  }
}
```

or

```graphql
query Example2 {
  users {
    email
    first_name
    last_name
    collaborator_in {
      project {
        name
        models {
          api_name
          display_name
          project_id
          id
        }
        collaborators {
          user {
            email
            first_name
            last_name
          }
          role {
            api_name
            display_name
            grants {
              grant
            }
          }
        }
        owner {
          email
          first_name
          last_name
        }
      }
      role {
        display_name
        api_name
      }
    }
  }
}
```

If there is no data returned the migration probably didn't happen. In that case check the init.sql file in the migrations folder and run it yourself via the Hasura console.

## Todos

Make all subfolders use the same .env in the root folder instead of copying it over
Add refresh token
Dont load all icons into the bundle D:
Move Hasura stuff into own folder
