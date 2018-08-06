import * as React from "react";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import { CardStyle, RaisedCardStyle} from "src/styles/mixin"
import styled from "styled-components";

export interface IHeaderProps {
  raised?: boolean;
  title?: string;
  children?: any;
}

const LinkButton = styled<IHeaderProps, any>(Link)`
  width: 250px;
  height: 30px;
  ${props => props.raised ? RaisedCardStyle : CardStyle}
  background-color: #4CAF50;
  color: white;
`;

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <div>
        <LinkButton title="삼국시대" to="/123" />
        <Button title="고려시대" />
        <Button title="조선시대" />
        <Button title="근현대시대" />
      </div>
    );
  }
}