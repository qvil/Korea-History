import * as React from "react";
import styled from "styled-components";

const Container = styled<any, any>("div")`
  margin-top: 20px;
`;

export interface IHomeProps {
  children?: any;
}

export default class Home extends React.Component<IHomeProps, any> {
  public render() {
    return <Container>현재 조선시대만 지원하고 있습니다.</Container>;
  }
}
