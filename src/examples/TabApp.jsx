import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

const Profile = () => <div>You're on the Contact Tab</div>;
const Comments = () => <div>You're on the Contact Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

class TabApp extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <h1>Hey welcome home!</h1>
        <div className="tab">
          <Link to={`${path}`} className="link">
            Profile
          </Link>
          <Link to={`${path}/comments`} className="link">
            Comments
          </Link>
          <Link to={`${path}/contact`} className="link">
            Contact
          </Link>
        </div>

        <div className="tab-container">
          <Switch>
            <Route path={`${path}`} exact component={Profile} />
            <Route path={`${path}/comments`} component={Comments} />
            <Route path={`${path}/contact`} component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TabApp;
