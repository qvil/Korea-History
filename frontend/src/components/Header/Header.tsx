import * as React from "react";
import Button from "src/components/Button";

export interface IHeaderProps {
  raised?: boolean;
  title?: string;
  children?: any;
}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <div>
        <Button title="삼국시대" to="/samguk" />
        <Button title="고려시대" to="/goryu"/>
        <Button title="조선시대" to="/joseon"/>
        <Button title="근현대시대" to="/hyundae"/>
      </div>
    );
  }
}