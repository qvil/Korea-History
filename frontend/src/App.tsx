import * as React from "react";
import { Card, Container } from "src/components";
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

const dummyData = [
  { title: "태종" },
  { title: "정종" },
  { title: "태조" },
  { title: "세종" },
  { title: "문종" },
  { title: "단종" },
  { title: "세조" }
];

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {dummyData.map((value, index) => (
            <Card key={index}>{`${index + 1}대 ${value.title}`}</Card>
          ))}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
