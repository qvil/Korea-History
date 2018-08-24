import * as React from "react";
import styled from "styled-components";

interface IContainerProps {
  props?: any;
}

const Select = styled<IContainerProps, any>("select")`
  align-self: stretch;
`;

interface IItemProps {
  children: any;
}

const Item = styled<IItemProps, any>("option")``;

export interface ILevelSelectProps {
  level?: number;
}

export default class LevelSelect extends React.Component<
  ILevelSelectProps,
  any
> {
  public state = {
    level: this.props.level
  };
  public render() {
    // const { level } = this.state;

    return (
      <Select>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Select>
    );
  }
}
