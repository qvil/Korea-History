import * as React from "react";
import { Link } from "react-router-dom";
import { CardStyle, RaisedCardStyle} from "src/styles/mixin"
import styled from "styled-components";


export interface IButtonProps {
  raised?: boolean;
  title?: string;
  to: string;
}

const StyledButton = styled<IButtonProps, any>(Link)`
  ${props => props.raised ? RaisedCardStyle : CardStyle}
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
`;

export default class Button extends React.Component<IButtonProps, any> {
  public render() {
    const { title } = this.props;

    return <StyledButton {...this.props}>{title}</StyledButton>;
  }
}
