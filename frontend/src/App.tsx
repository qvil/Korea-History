import ApolloClient from "apollo-boost";
import { defaultDataIdFromObject, InMemoryCache } from "apollo-cache-inmemory";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "src/components";
import Body from "src/components/Body";
import Header from "src/components/Header";
import { height100 } from "src/styles/mixin";
import theme from "src/styles/theme";
import { injectGlobal, ThemeProvider } from "styled-components";

const cache = new InMemoryCache({
  dataIdFromObject: (object: any) => {
    switch (object.__typename) {
      case "foo":
        return object.key;
      default:
        return defaultDataIdFromObject(object);
    }
  }
});
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/"
});

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
  }
  #root {
    ${height100}
  }
`;

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Router>
            <Container>
              <Header />
              <Body />
            </Container>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
