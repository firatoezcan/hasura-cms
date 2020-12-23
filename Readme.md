Schema with permissions for GraphCMS-like handling of content types  
Automatically exposed GraphQL API via Hasura

## Installation

You need:

- `docker`
- `docker-compose`
- Preferably `yarn`, but `npm` also works

**Important!!:** Change the secrets within `.env.example` and then rename it to `.env`  
Run `yarn`/`npm install` followed by `docker-compose up -d`  
This should start the initial setup and migration for Hasura/Postgres

The console is started with `./hasura-console.sh` to enable automatic generation of migration files on change  
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
