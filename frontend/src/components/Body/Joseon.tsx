import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
// import { withRouter } from "react-router";
import { Route, withRouter } from "react-router-dom";
import { Card } from "src/components";

export interface IJoseonProps {
  children?: any;
  match?: any;
}

class Joseon extends React.Component<IJoseonProps, any> {
  public renderCustom = () => <div>Yes!</div>;
  public render() {
    const { path } = this.props.match;

    console.log(this.props);
    console.log(path);
    return (
      <React.Fragment>
        <Route
          // exact={true}
          // path={`/1`}
          path={"/joseon/1"}
          // path={`${path}/1`}
          // tslint:disable-next-line:jsx-no-lambda
          component={this.renderCustom}
        />
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
              <Card key={index} index={index} image={value.image}>{`${index +
                1}대 ${value.title}`}</Card>
            ));
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default withRouter<any>(Joseon);
