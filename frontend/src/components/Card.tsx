import * as React from "react";
import { withRouter } from "react-router";
import { CardStyle, RaisedCardStyle } from "src/styles/mixin";
import styled from "styled-components";

export interface ICardProps {
  raised?: boolean;
  index: number;
  image?: string;
  history?: any;
  match?: any;
}

const StyledCard = styled<ICardProps, any>("div")`
  ${props => (props.raised ? RaisedCardStyle : CardStyle)};
  background: no-repeat center/100% url(${props => props.image});
  width: 9rem;
  height: 16rem;
  cursor: pointer;
`;

class Card extends React.Component<ICardProps, any> {
  public state = {
    raised: false
  };

  public render() {
    const { handleMouse, handleClick } = this;
    const { raised } = this.state;
    const { children, index } = this.props;

    return (
      <StyledCard
        raised={raised}
        onMouseEnter={handleMouse("Enter")}
        onMouseLeave={handleMouse("Leave")}
        onClick={handleClick(index)}
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

  private handleClick = (index: number) => () => {
    const { match } = this.props;
    this.props.history.push(`${match.path}/${index + 1}`);
  };
}

export default withRouter<any>(Card);
