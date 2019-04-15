import React from "react";
import { Link, Route, Switch } from "react-router-dom";

class Profile extends React.Component {
  componentDidMount() {
    const { onLoading } = this.props;
    onLoading(true);

    fetch("https://api.github.com/users/miconblog")
      .then(res => res.json())
      .then(data => {
        onLoading(false);
        console.log(data);
      });

    setTimeout(() => {
      onLoading(false);
    }, 2000);
  }

  render() {
    const { loading, match } = this.props;
    console.log(loading);
    console.log(match);
    if (loading) return <div>정보를 불러오는 중입니다...</div>;
    return <div>프로필 정보: {match.params.profileId}</div>;
  }
}

const SelectProfile = () => <div>프로필 하나를 선택하세요.</div>;

class App extends React.Component {
  state = {
    loading: false
  };

  handleLoading = loading => {
    this.setState({
      loading
    });
  };

  render() {
    return (
      <div>
        <div className="links">
          <Link to="/profile" className="link">
            Home
          </Link>
          <Link to="/profile/miconblog" className="link">
            Profile 1
          </Link>
          <Link to="/profile/2" className="link">
            Profile 2
          </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path="/profile" exact component={SelectProfile} />
            <Route
              path="/profile/:profileId"
              render={props => {
                return (
                  <Profile
                    key={props.location.pathname}
                    {...props}
                    loading={this.state.loading}
                    onLoading={this.handleLoading}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
