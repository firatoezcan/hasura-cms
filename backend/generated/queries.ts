import * as Types from './hasuraTypes';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export const GetUserDocument = gql`
    query GetUser($id: uuid!) {
  users_by_pk(id: $id) {
    id
    first_name
    last_name
    email
  }
}
    `;
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

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUser(variables: Types.GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetUserQuery> {
      return withWrapper(() => client.request<Types.GetUserQuery>(GetUserDocument, variables, requestHeaders));
    },
    Me(variables?: Types.MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.MeQuery> {
      return withWrapper(() => client.request<Types.MeQuery>(MeDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;