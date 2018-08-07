import * as React from "react";

export interface INotFoundProps {
  code?: any;
}

export default class NotFound extends React.Component<INotFoundProps, any> {
  public render() {
    const { code = 404 } = this.props;

    return <div>{`Error :( ${code} Not Found.`}</div>;
  }
}
