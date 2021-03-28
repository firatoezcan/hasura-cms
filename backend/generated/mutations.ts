import * as Types from './hasuraTypes';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export const CreateUserDocument = gql`
    mutation CreateUser($firstName: String!, $lastName: String!, $email: String!) {
  insert_users_one(object: {first_name: $firstName, last_name: $lastName, email: $email}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateUser(variables: Types.CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.CreateUserMutation> {
      return withWrapper(() => client.request<Types.CreateUserMutation>(CreateUserDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;