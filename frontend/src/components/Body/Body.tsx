import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Joseon, NotFound } from "src/components/Body";
import Home from "src/components/Home";
import BodyContainer from "./BodyContainer";

export interface IBodyProps {
  children?: any;
}

const NewBodyContainer = BodyContainer.extend`
  margin-top: ${props => props.theme.spacing.gutter}rem;
`;

export default class Body extends React.Component<IBodyProps, any> {
  public render() {
    return (
      <NewBodyContainer>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/joseon" component={Joseon} />
          <Route component={NotFound} />
        </Switch>
      </NewBodyContainer>
    );
  }
}
