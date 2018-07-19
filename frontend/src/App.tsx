import * as React from "react";
import { Container } from "src/components";
import Body from "src/components/Body";
import Header from "src/components/Header";
import { height100 } from "src/styles/mixin";
import theme from "src/styles/theme";
import { injectGlobal, ThemeProvider } from "styled-components";

// tslint:disable-next-line:no-unused-expression
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
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Body />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
