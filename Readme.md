Schema with permissions for GraphCMS-like handling of content types
Automatically exposed GraphQL API via Hasura

## Installation

You need:

- `docker`
- `docker-compose`
- Preferably `yarn`, but `npm` also works

Run `yarn`/`npm install` followed by `docker-compose up -d`
This should start the initial setup and migration for Hasura/Postgres

The console is started with `./hasura-console.sh` to enable automatic generation of migration files on change
The admin secret can be found within the `.env.example` file

You can shut everything down with `docker-compose down`
