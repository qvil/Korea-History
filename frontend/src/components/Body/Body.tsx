import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { Card } from "src/components";
import BodyContainer from "./BodyContainer";

export interface IBodyProps {
  children?: any;
}

export default class Body extends React.Component<IBodyProps, any> {
  public render() {
    return (
      <BodyContainer>
        <Query
          query={gql`
            {
              kings {
                title
                image
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            // tslint:disable-next-line:curly
            if (loading) return <p>Loading...</p>;
            // tslint:disable-next-line:curly
            if (error) return <p>Error :(</p>;

            return data.kings.map((value: any, index: number) => (
              <Card key={index} image={value.image}>{`${index + 1}대 ${
                value.title
              }`}</Card>
            ));
          }}
        </Query>
      </BodyContainer>
    );
  }
}
