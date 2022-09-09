import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
console.log("import.meta.env", import.meta.env);

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: import.meta.env.VITE_APOLLO_CLIENT_URI,
  }),
});
