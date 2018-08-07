import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Joseon, NotFound } from "src/components/Body"
import BodyContainer from "./BodyContainer";

export interface IBodyProps {
  children?: any;
}

export default class Body extends React.Component<IBodyProps, any> {
  public render() {
    return (
      <BodyContainer>
        <Switch>
          <Route exact={true} path="/" />
          <Route exact={true} path="/joseon" component={Joseon} />
          // tslint:disable-next-line:jsx-no-lambda
          {/* <Route render={() => <NotFound code={404} />} /> */}
          <Route component={NotFound} />
        </Switch>
      </BodyContainer>
    );
  }
}
