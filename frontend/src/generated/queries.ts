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