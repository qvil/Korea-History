import * as React from "react";
import BodyContainer from "./BodyContainer";

export interface IBodyProps {
  children?: any;
}

export default class Body extends React.Component<IBodyProps, any> {
  public render() {
    const { children } = this.props;

    return <BodyContainer>{children}</BodyContainer>;
  }
}
