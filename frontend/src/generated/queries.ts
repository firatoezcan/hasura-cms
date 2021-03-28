import * as Types from './hasuraTypes';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const MeDocument = gql`
    query Me {
  me {
    id
    first_name
    last_name
    email
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<Types.MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Types.MeQuery>({ query: MeDocument, ...options });
};
export const TestMeDocument = gql`
    query TestMe {
  me {
    id
    owned_projects {
      id
      name
    }
  }
}
    `;

export function useTestMeQuery(options: Omit<Urql.UseQueryArgs<Types.TestMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Types.TestMeQuery>({ query: TestMeDocument, ...options });
};
export const TestProjectsDocument = gql`
    query TestProjects {
  projects {
    id
    name
    collaborators {
      user {
        first_name
        email
      }
    }
    models {
      file_fields {
        id
        position
        required
      }
    }
  }
}
    `;

export function useTestProjectsQuery(options: Omit<Urql.UseQueryArgs<Types.TestProjectsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Types.TestProjectsQuery>({ query: TestProjectsDocument, ...options });
};