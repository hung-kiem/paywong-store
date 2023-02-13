import { withUrqlClient } from "next-urql";
import App from "next/app";

const HASURA_GRAPHQL_ENDPOINT =
  process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT ||
  "https://api.staging.paywong.com/v1/graphql";
const TOKEN =
  process.env.HASURA_GRAPHQL_USER_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJwYXl3b25nZXIiLCJwdWJsaWMiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoicGF5d29uZ2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImRpZDpldGhyOjB4Nzk3OWZERWI4MWUzODg0MzdiREFmQjgyMjIyQTg1OTZCMTEzRjYyQiIsIngtaGFzdXJhLXVzZXItZW1haWwiOiJodW5nQHdhbGF3b25nLmNvbSJ9LCJleHAiOjE2NzY5MzM4NzksImlhdCI6MTY3NjMyOTA3OX0.nwF9l5iWao0wYF2WLSukG0kSsLCeeElj1tghStrQArU";

export default withUrqlClient(() => ({
  url: HASURA_GRAPHQL_ENDPOINT,
  fetchOptions: {
    headers: {
      authorization: `Bearer ${TOKEN}`,
    },
  },
}))(App);
