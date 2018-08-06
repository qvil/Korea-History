import * as React from "react";
import { CardStyle, RaisedCardStyle} from "src/styles/mixin"
import styled from "styled-components";


export interface IButtonProps {
  raised?: boolean;
  title?: string;
}

const StyledButton = styled<IButtonProps, any>("button")`
  ${props => props.raised ? RaisedCardStyle : CardStyle}
  background-color: #4CAF50;
  color: white;
`;

export default class Button extends React.Component<IButtonProps, any> {
  public render() {
    const { title } = this.props;

    return <StyledButton>{title}</StyledButton>;
  }
}
