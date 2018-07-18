import { height100 } from "src/styles/mixin";
import styled from "styled-components";

interface IContainer {
  backgroundColor: string;
}

const Container = styled<IContainer, any>("div")`
  ${height100}
  background-color: ${props => props.backgroundColor};
`;

export default Container;
