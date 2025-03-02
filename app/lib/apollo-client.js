import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.GRAPHQL_BASE_URI);

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BASE_URI}api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
