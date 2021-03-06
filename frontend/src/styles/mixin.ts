import { css } from "styled-components";

export const height100 = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardStyle = css`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 3px 1px -2px rgba(0, 0, 0, 0.11);
  background-color: white;
  /* border-radius: ${(props: any) => props.theme.spacing.unit}rem; */
  padding: ${(props: any) => props.theme.spacing.gutter || props.padding}rem;
  /* margin: ${(props: any) => props.margin || props.theme.spacing.unit}rem; */
  /* max-width: 24rem; */
`;

export const RaisedCardStyle = css`
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
  0px 8px 10px 1px rgba(0, 0, 0, 0.14),
  0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  /* border-radius: ${(props: any) => props.theme.spacing.unit}rem; */
  padding: ${(props: any) => props.theme.spacing.gutter || props.padding}rem;
  /* margin: ${(props: any) => props.margin || props.theme.spacing.unit}rem; */
  /* max-width: 24rem; */
`;
