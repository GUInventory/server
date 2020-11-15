import { gql } from 'graphql-request'

export const register = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(data: { name: $name, email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`
