import * as Types from './hasuraTypes';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const LoginDocument = gql`
    mutation Login($id: uuid!) {
  login(id: $id) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $email: String!) {
  register(firstName: $firstName, lastName: $lastName, email: $email) {
    id
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<Types.RegisterMutation, Types.RegisterMutationVariables>(RegisterDocument);
};