import * as React from "react";
import Button from "src/components/Button";

export interface IHeaderProps {
  children?: any;
}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <div>
        <Button title="삼국시대" />
        <Button title="고려시대" />
        <Button title="조선시대" />
        <Button title="근현대시대" />
      </div>
    );
  }
}
