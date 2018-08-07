import * as React from "react";
import { CardStyle, RaisedCardStyle } from "src/styles/mixin";
import styled from "styled-components";

export interface ICardProps {
  raised?: boolean;
  image?: string;
}

const StyledCard = styled<ICardProps, any>("div")`
  ${props => (props.raised ? RaisedCardStyle : CardStyle)};
  background: no-repeat center/100% url(${props => props.image});
  width: 9rem;
  height: 16rem;
  cursor: pointer;
`;

export default class Card extends React.Component<ICardProps, any> {
  public state = {
    raised: false
  };

  public render() {
    const { handleMouse } = this;
    const { raised } = this.state;
    const { children } = this.props;

    return (
      <StyledCard
        raised={raised}
        onMouseEnter={handleMouse("Enter")}
        onMouseLeave={handleMouse("Leave")}
        {...this.props}
      >
        {children}
      </StyledCard>
    );
  }

  private handleMouse = (name: string) => () => {
    if (name === "Enter") {
      this.setState({ raised: true });
    } else {
      this.setState({ raised: false });
    }
  };
}
