import * as React from "react";

export interface IHeaderProps {
  children?: any;
}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return <div>Header</div>;
  }
}
