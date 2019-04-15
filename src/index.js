import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import "./App.css";

const isLoggedIn = false;
const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/form">From</Link>
  </nav>
);

class Form extends React.Component {
  state = { dirty: false };
  setDirty = () => this.setState({ dirty: true });
  render() {
    return (
      <div>
        <h1>Form {this.state.dirty ? "작성중" : ""}</h1>
        <input type="text" onInput={this.setDirty} />
        <Prompt
          when={this.state.dirty}
          message={"저장되지 않은 데이터가 있습니다. 정말 이동할까요?"}
        />
      </div>
    );
  }
}

const ProtectedPage = () => <h2>인증된 페이지</h2>;
const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
