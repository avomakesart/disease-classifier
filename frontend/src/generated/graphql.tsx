import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BloodPressure = {
  __typename?: 'BloodPressure';
  id: Scalars['Float'];
  sysBp: Scalars['Float'];
  diaBp: Scalars['Float'];
  atDate: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BloodPressureInput = {
  sysBp: Scalars['Float'];
  diaBp: Scalars['Float'];
  atDate: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type KidneyMeasure = {
  __typename?: 'KidneyMeasure';
  id: Scalars['Float'];
  eGFR: Scalars['Float'];
  atDate: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type KidneyMeasureInput = {
  eGFR: Scalars['Float'];
  atDate: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBloodPressure: BloodPressure;
  updateBloodPressure?: Maybe<BloodPressure>;
  deleteBloodPressure: Scalars['Boolean'];
  createKidneyMeasure: KidneyMeasure;
  updateKidneyMeasure?: Maybe<KidneyMeasure>;
  deleteKidneyMeasure: Scalars['Boolean'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  updateUser?: Maybe<Users>;
};


export type MutationCreateBloodPressureArgs = {
  input: BloodPressureInput;
};


export type MutationUpdateBloodPressureArgs = {
  input: BloodPressureInput;
  id: Scalars['Int'];
};


export type MutationDeleteBloodPressureArgs = {
  id: Scalars['Int'];
};


export type MutationCreateKidneyMeasureArgs = {
  input: KidneyMeasureInput;
};


export type MutationUpdateKidneyMeasureArgs = {
  input: KidneyMeasureInput;
  id: Scalars['Int'];
};


export type MutationDeleteKidneyMeasureArgs = {
  id: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UserInput;
  id: Scalars['Int'];
};

export type PaginatedBloodPressure = {
  __typename?: 'PaginatedBloodPressure';
  bloodPressure: Array<BloodPressure>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedKidneyMeasure = {
  __typename?: 'PaginatedKidneyMeasure';
  kidneyMeasure: Array<KidneyMeasure>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  bloodPressures: PaginatedBloodPressure;
  bloodPressure?: Maybe<BloodPressure>;
  kidneyMeasures: PaginatedKidneyMeasure;
  kidneyMeasure?: Maybe<KidneyMeasure>;
  me?: Maybe<Users>;
};


export type QueryBloodPressuresArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryBloodPressureArgs = {
  id: Scalars['Int'];
};


export type QueryKidneyMeasuresArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryKidneyMeasureArgs = {
  id: Scalars['Int'];
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  pictureUrl: Scalars['String'];
  bio: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Users>;
};

export type UsernamePasswordInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  id: Scalars['Float'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  pictureUrl: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'Users' }
  & Pick<Users, 'id' | 'firstName' | 'lastName' | 'username' | 'email' | 'bio' | 'pictureUrl'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'Users' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateBloodPressureMutationVariables = Exact<{
  input: BloodPressureInput;
}>;


export type CreateBloodPressureMutation = (
  { __typename?: 'Mutation' }
  & { createBloodPressure: (
    { __typename?: 'BloodPressure' }
    & Pick<BloodPressure, 'id' | 'sysBp' | 'diaBp' | 'atDate' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateKidneyMeasureMutationVariables = Exact<{
  input: KidneyMeasureInput;
}>;


export type CreateKidneyMeasureMutation = (
  { __typename?: 'Mutation' }
  & { createKidneyMeasure: (
    { __typename?: 'KidneyMeasure' }
    & Pick<KidneyMeasure, 'id' | 'eGFR' | 'atDate' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteBloodPressureMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteBloodPressureMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBloodPressure'>
);

export type DeleteKidneyMeasureMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteKidneyMeasureMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteKidneyMeasure'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdateKidneyMeasureMutationVariables = Exact<{
  id: Scalars['Int'];
  input: KidneyMeasureInput;
}>;


export type UpdateKidneyMeasureMutation = (
  { __typename?: 'Mutation' }
  & { updateKidneyMeasure?: Maybe<(
    { __typename?: 'KidneyMeasure' }
    & Pick<KidneyMeasure, 'id' | 'eGFR' | 'atDate' | 'updatedAt'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'pictureUrl' | 'bio'>
  )> }
);

export type BloodPreassureQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BloodPreassureQuery = (
  { __typename?: 'Query' }
  & { bloodPressure?: Maybe<(
    { __typename?: 'BloodPressure' }
    & Pick<BloodPressure, 'id' | 'sysBp' | 'diaBp' | 'atDate' | 'createdAt' | 'updatedAt'>
  )> }
);

export type KidneyMeasuresQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type KidneyMeasuresQuery = (
  { __typename?: 'Query' }
  & { kidneyMeasures: (
    { __typename?: 'PaginatedKidneyMeasure' }
    & Pick<PaginatedKidneyMeasure, 'hasMore'>
    & { kidneyMeasure: Array<(
      { __typename?: 'KidneyMeasure' }
      & Pick<KidneyMeasure, 'id' | 'eGFR' | 'atDate' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type KidneyMeasureQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type KidneyMeasureQuery = (
  { __typename?: 'Query' }
  & { kidneyMeasure?: Maybe<(
    { __typename?: 'KidneyMeasure' }
    & Pick<KidneyMeasure, 'id' | 'eGFR' | 'atDate' | 'createdAt' | 'updatedAt'>
  )> }
);

export type BloodPressuresQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type BloodPressuresQuery = (
  { __typename?: 'Query' }
  & { bloodPressures: (
    { __typename?: 'PaginatedBloodPressure' }
    & Pick<PaginatedBloodPressure, 'hasMore'>
    & { bloodPressure: Array<(
      { __typename?: 'BloodPressure' }
      & Pick<BloodPressure, 'id' | 'sysBp' | 'diaBp' | 'atDate' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Users' }
    & RegularUserFragment
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on Users {
  id
  firstName
  lastName
  username
  email
  bio
  pictureUrl
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateBloodPressureDocument = gql`
    mutation CreateBloodPressure($input: BloodPressureInput!) {
  createBloodPressure(input: $input) {
    id
    sysBp
    diaBp
    atDate
    createdAt
    updatedAt
  }
}
    `;
export type CreateBloodPressureMutationFn = Apollo.MutationFunction<CreateBloodPressureMutation, CreateBloodPressureMutationVariables>;

/**
 * __useCreateBloodPressureMutation__
 *
 * To run a mutation, you first call `useCreateBloodPressureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBloodPressureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBloodPressureMutation, { data, loading, error }] = useCreateBloodPressureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBloodPressureMutation(baseOptions?: Apollo.MutationHookOptions<CreateBloodPressureMutation, CreateBloodPressureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBloodPressureMutation, CreateBloodPressureMutationVariables>(CreateBloodPressureDocument, options);
      }
export type CreateBloodPressureMutationHookResult = ReturnType<typeof useCreateBloodPressureMutation>;
export type CreateBloodPressureMutationResult = Apollo.MutationResult<CreateBloodPressureMutation>;
export type CreateBloodPressureMutationOptions = Apollo.BaseMutationOptions<CreateBloodPressureMutation, CreateBloodPressureMutationVariables>;
export const CreateKidneyMeasureDocument = gql`
    mutation CreateKidneyMeasure($input: KidneyMeasureInput!) {
  createKidneyMeasure(input: $input) {
    id
    eGFR
    atDate
    createdAt
    updatedAt
  }
}
    `;
export type CreateKidneyMeasureMutationFn = Apollo.MutationFunction<CreateKidneyMeasureMutation, CreateKidneyMeasureMutationVariables>;

/**
 * __useCreateKidneyMeasureMutation__
 *
 * To run a mutation, you first call `useCreateKidneyMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKidneyMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKidneyMeasureMutation, { data, loading, error }] = useCreateKidneyMeasureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateKidneyMeasureMutation(baseOptions?: Apollo.MutationHookOptions<CreateKidneyMeasureMutation, CreateKidneyMeasureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateKidneyMeasureMutation, CreateKidneyMeasureMutationVariables>(CreateKidneyMeasureDocument, options);
      }
export type CreateKidneyMeasureMutationHookResult = ReturnType<typeof useCreateKidneyMeasureMutation>;
export type CreateKidneyMeasureMutationResult = Apollo.MutationResult<CreateKidneyMeasureMutation>;
export type CreateKidneyMeasureMutationOptions = Apollo.BaseMutationOptions<CreateKidneyMeasureMutation, CreateKidneyMeasureMutationVariables>;
export const DeleteBloodPressureDocument = gql`
    mutation DeleteBloodPressure($id: Int!) {
  deleteBloodPressure(id: $id)
}
    `;
export type DeleteBloodPressureMutationFn = Apollo.MutationFunction<DeleteBloodPressureMutation, DeleteBloodPressureMutationVariables>;

/**
 * __useDeleteBloodPressureMutation__
 *
 * To run a mutation, you first call `useDeleteBloodPressureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBloodPressureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBloodPressureMutation, { data, loading, error }] = useDeleteBloodPressureMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBloodPressureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBloodPressureMutation, DeleteBloodPressureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBloodPressureMutation, DeleteBloodPressureMutationVariables>(DeleteBloodPressureDocument, options);
      }
export type DeleteBloodPressureMutationHookResult = ReturnType<typeof useDeleteBloodPressureMutation>;
export type DeleteBloodPressureMutationResult = Apollo.MutationResult<DeleteBloodPressureMutation>;
export type DeleteBloodPressureMutationOptions = Apollo.BaseMutationOptions<DeleteBloodPressureMutation, DeleteBloodPressureMutationVariables>;
export const DeleteKidneyMeasureDocument = gql`
    mutation DeleteKidneyMeasure($id: Int!) {
  deleteKidneyMeasure(id: $id)
}
    `;
export type DeleteKidneyMeasureMutationFn = Apollo.MutationFunction<DeleteKidneyMeasureMutation, DeleteKidneyMeasureMutationVariables>;

/**
 * __useDeleteKidneyMeasureMutation__
 *
 * To run a mutation, you first call `useDeleteKidneyMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteKidneyMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteKidneyMeasureMutation, { data, loading, error }] = useDeleteKidneyMeasureMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteKidneyMeasureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteKidneyMeasureMutation, DeleteKidneyMeasureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteKidneyMeasureMutation, DeleteKidneyMeasureMutationVariables>(DeleteKidneyMeasureDocument, options);
      }
export type DeleteKidneyMeasureMutationHookResult = ReturnType<typeof useDeleteKidneyMeasureMutation>;
export type DeleteKidneyMeasureMutationResult = Apollo.MutationResult<DeleteKidneyMeasureMutation>;
export type DeleteKidneyMeasureMutationOptions = Apollo.BaseMutationOptions<DeleteKidneyMeasureMutation, DeleteKidneyMeasureMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateKidneyMeasureDocument = gql`
    mutation UpdateKidneyMeasure($id: Int!, $input: KidneyMeasureInput!) {
  updateKidneyMeasure(id: $id, input: $input) {
    id
    eGFR
    atDate
    updatedAt
  }
}
    `;
export type UpdateKidneyMeasureMutationFn = Apollo.MutationFunction<UpdateKidneyMeasureMutation, UpdateKidneyMeasureMutationVariables>;

/**
 * __useUpdateKidneyMeasureMutation__
 *
 * To run a mutation, you first call `useUpdateKidneyMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKidneyMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKidneyMeasureMutation, { data, loading, error }] = useUpdateKidneyMeasureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateKidneyMeasureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKidneyMeasureMutation, UpdateKidneyMeasureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKidneyMeasureMutation, UpdateKidneyMeasureMutationVariables>(UpdateKidneyMeasureDocument, options);
      }
export type UpdateKidneyMeasureMutationHookResult = ReturnType<typeof useUpdateKidneyMeasureMutation>;
export type UpdateKidneyMeasureMutationResult = Apollo.MutationResult<UpdateKidneyMeasureMutation>;
export type UpdateKidneyMeasureMutationOptions = Apollo.BaseMutationOptions<UpdateKidneyMeasureMutation, UpdateKidneyMeasureMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $input: UserInput!) {
  updateUser(id: $id, input: $input) {
    id
    firstName
    lastName
    email
    username
    pictureUrl
    bio
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const BloodPreassureDocument = gql`
    query BloodPreassure($id: Int!) {
  bloodPressure(id: $id) {
    id
    sysBp
    diaBp
    atDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useBloodPreassureQuery__
 *
 * To run a query within a React component, call `useBloodPreassureQuery` and pass it any options that fit your needs.
 * When your component renders, `useBloodPreassureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBloodPreassureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBloodPreassureQuery(baseOptions: Apollo.QueryHookOptions<BloodPreassureQuery, BloodPreassureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BloodPreassureQuery, BloodPreassureQueryVariables>(BloodPreassureDocument, options);
      }
export function useBloodPreassureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BloodPreassureQuery, BloodPreassureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BloodPreassureQuery, BloodPreassureQueryVariables>(BloodPreassureDocument, options);
        }
export type BloodPreassureQueryHookResult = ReturnType<typeof useBloodPreassureQuery>;
export type BloodPreassureLazyQueryHookResult = ReturnType<typeof useBloodPreassureLazyQuery>;
export type BloodPreassureQueryResult = Apollo.QueryResult<BloodPreassureQuery, BloodPreassureQueryVariables>;
export const KidneyMeasuresDocument = gql`
    query KidneyMeasures($limit: Int!, $cursor: String) {
  kidneyMeasures(limit: $limit, cursor: $cursor) {
    hasMore
    kidneyMeasure {
      id
      eGFR
      atDate
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useKidneyMeasuresQuery__
 *
 * To run a query within a React component, call `useKidneyMeasuresQuery` and pass it any options that fit your needs.
 * When your component renders, `useKidneyMeasuresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKidneyMeasuresQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useKidneyMeasuresQuery(baseOptions: Apollo.QueryHookOptions<KidneyMeasuresQuery, KidneyMeasuresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KidneyMeasuresQuery, KidneyMeasuresQueryVariables>(KidneyMeasuresDocument, options);
      }
export function useKidneyMeasuresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KidneyMeasuresQuery, KidneyMeasuresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KidneyMeasuresQuery, KidneyMeasuresQueryVariables>(KidneyMeasuresDocument, options);
        }
export type KidneyMeasuresQueryHookResult = ReturnType<typeof useKidneyMeasuresQuery>;
export type KidneyMeasuresLazyQueryHookResult = ReturnType<typeof useKidneyMeasuresLazyQuery>;
export type KidneyMeasuresQueryResult = Apollo.QueryResult<KidneyMeasuresQuery, KidneyMeasuresQueryVariables>;
export const KidneyMeasureDocument = gql`
    query KidneyMeasure($id: Int!) {
  kidneyMeasure(id: $id) {
    id
    eGFR
    atDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useKidneyMeasureQuery__
 *
 * To run a query within a React component, call `useKidneyMeasureQuery` and pass it any options that fit your needs.
 * When your component renders, `useKidneyMeasureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKidneyMeasureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useKidneyMeasureQuery(baseOptions: Apollo.QueryHookOptions<KidneyMeasureQuery, KidneyMeasureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KidneyMeasureQuery, KidneyMeasureQueryVariables>(KidneyMeasureDocument, options);
      }
export function useKidneyMeasureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KidneyMeasureQuery, KidneyMeasureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KidneyMeasureQuery, KidneyMeasureQueryVariables>(KidneyMeasureDocument, options);
        }
export type KidneyMeasureQueryHookResult = ReturnType<typeof useKidneyMeasureQuery>;
export type KidneyMeasureLazyQueryHookResult = ReturnType<typeof useKidneyMeasureLazyQuery>;
export type KidneyMeasureQueryResult = Apollo.QueryResult<KidneyMeasureQuery, KidneyMeasureQueryVariables>;
export const BloodPressuresDocument = gql`
    query BloodPressures($limit: Int!, $cursor: String) {
  bloodPressures(limit: $limit, cursor: $cursor) {
    hasMore
    bloodPressure {
      id
      sysBp
      diaBp
      atDate
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useBloodPressuresQuery__
 *
 * To run a query within a React component, call `useBloodPressuresQuery` and pass it any options that fit your needs.
 * When your component renders, `useBloodPressuresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBloodPressuresQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useBloodPressuresQuery(baseOptions: Apollo.QueryHookOptions<BloodPressuresQuery, BloodPressuresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BloodPressuresQuery, BloodPressuresQueryVariables>(BloodPressuresDocument, options);
      }
export function useBloodPressuresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BloodPressuresQuery, BloodPressuresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BloodPressuresQuery, BloodPressuresQueryVariables>(BloodPressuresDocument, options);
        }
export type BloodPressuresQueryHookResult = ReturnType<typeof useBloodPressuresQuery>;
export type BloodPressuresLazyQueryHookResult = ReturnType<typeof useBloodPressuresLazyQuery>;
export type BloodPressuresQueryResult = Apollo.QueryResult<BloodPressuresQuery, BloodPressuresQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;