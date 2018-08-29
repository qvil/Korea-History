import * as React from "react";
import { CardStyle } from "src/styles/mixin";
import styled from "styled-components";

interface IContainerProps {
  props?: any;
}

const SelectWrapper = styled<any, any>("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${CardStyle};
  background-color: ${props => props.theme.color.secondary};
  color: white;
  /* width: ${props => props.theme.spacing.unit * 5}rem; */
`;

const Select = styled<IContainerProps, any>("select")``;

interface IItemProps {
  children: any;
}

const Item = styled<IItemProps, any>("option")``;

export interface ILevelSelectProps {
  level?: number;
}

interface Ilevel {
  level: number;
  title: string;
}

export default class LevelSelect extends React.Component<
  ILevelSelectProps,
  any
> {
  public state = {
    level: this.props.level,
    levelList: [
      { level: 1, title: "초급" },
      { level: 2, title: "중급" },
      { level: 3, title: "고급" },
      { level: 4, title: "공시생" }
    ]
  };

  public render() {
    const { handleChange } = this;
    const { levelList } = this.state;

    return (
      <SelectWrapper>
        레벨
        <Select onChange={handleChange}>
          {levelList.map((level: Ilevel) => (
            <Item
              key={level.level}
              value={level.level}
              onClick={handleChange}
            >{`${level.level}(${level.title})`}</Item>
          ))}
        </Select>
      </SelectWrapper>
    );
  }

  private handleChange = (e: any) => {
    this.setState({ level: e.target.value });
  };
}
