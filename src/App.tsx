import { ApolloProvider } from "@apollo/client";
import { client } from "./grapql/apolloClientInit";
import ContainerGrid from "./components/layout/container/ContainerGrid";
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";

function App() {
  return (
    <ApolloProvider client={client}>
      <ContainerGrid>
        <Header />
        <Home />
      </ContainerGrid>
    </ApolloProvider>
  );
}

export default App;
