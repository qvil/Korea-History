import * as React from "react";
import { Card } from "src/components";
import data from "src/data.json";
import BodyContainer from "./BodyContainer";

export interface IBodyProps {
  children?: any;
}

export default class Body extends React.Component<IBodyProps, any> {
  public render() {
    return (
      <BodyContainer>
        {data.data.map((value: any, index: number) => (
          <Card key={index}>{`${index + 1}대 ${value.title}`}</Card>
        ))}
      </BodyContainer>
    );
  }
}
