import * as React from "react";
import Button from "src/components/Button";
import styled from "styled-components";
import { LevelSelect } from ".";

export interface IHeaderProps {
  children?: any;
}

const HeaderContainer = styled<IHeaderProps, any>("div")`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <HeaderContainer>
        <Button title="홈" to="/" />
        <Button title="삼국시대" to="/samguk" />
        <Button title="고려시대" to="/goryu" />
        <Button title="조선시대" to="/joseon" />
        <Button title="근현대시대" to="/hyundae" />
        <LevelSelect level={1} />
      </HeaderContainer>
    );
  }
}
