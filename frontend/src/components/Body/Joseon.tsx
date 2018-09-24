import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
// import { withRouter } from "react-router";
import { Route, Switch, withRouter } from "react-router-dom";
import { Card } from "src/components";
import { Consumer } from "src/store";

export interface IJoseonProps {
  children?: any;
  match?: any;
}

class Joseon extends React.Component<IJoseonProps, any> {
  public renderCustom = () => <div>Yes!</div>;
  public render() {
    const { renderCustom, renderKingList } = this;
    const { path } = this.props.match;

    return (
      <React.Fragment>
        <Switch>
          <Route exact={true} path={path} component={renderKingList} />
          <Route path={`${path}/1`} component={renderCustom} />
        </Switch>
      </React.Fragment>
    );
  }

  private renderKingList = () => (
    <Query
      query={gql`
        {
          kings {
            title
            image
            level
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        // tslint:disable-next-line:curly
        if (loading) return <p>Loading...</p>;
        // tslint:disable-next-line:curly
        if (error) return <p>Error :(</p>;

        return (
          <Consumer>
            {store =>
              data.kings.map(
                (value: any, index: number) => (
                  // value.level > store.level ? (
                  <Card
                    key={index}
                    index={index}
                    image={value.image}
                  >{`${index + 1}대 ${value.title}`}</Card>
                )
                // ) : null
              )
            }
          </Consumer>
        );
      }}
    </Query>
  );
}

export default withRouter<any>(Joseon);
