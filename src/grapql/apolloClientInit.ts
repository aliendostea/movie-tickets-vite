import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://movie-tickets-demo-vitet-ts-29cd.netlify.app/.netlify/functions/graphql",
  }),
});
