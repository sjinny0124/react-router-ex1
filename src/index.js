import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

const isLoggedIn = false;
const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/protected">인증된 사람만 볼 수 있다.</Link>
  </nav>
);

const SiginIn = () => (
  <div>
    <h2>로그인</h2>
    <form>
      <input placeholder="ID" type="text" />
      <input placeholder="PW" type="password" />
    </form>
  </div>
);

const ProtectedPage = () => <h2>인증된 페이지</h2>;
const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route
          path="/signin"
          render={() =>
            isLoggedIn ? <Redirect to="/protected" /> : <SiginIn />
          }
        />
        <Route
          path="/protected"
          render={() =>
            isLoggedIn ? <ProtectedPage /> : <Redirect to="/signin" />
          }
        />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
