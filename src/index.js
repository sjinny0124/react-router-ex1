import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
const User = ({ name }) => <div className="User">{name}</div>;

const hoc = BaseComponent => props => {
  console.log("===>", props, BaseComponent);
  return <BaseComponent {...props} name="Jim" />;
};

const hoc2 = overrideProps => BaseComponent => props => (
  <BaseComponent {...props} {...overrideProps} />
);

const User3 = hoc2({ name: "Bob" })(User);
const User2 = hoc(User);

const App = () => (
  <div>
    <User name="Tim" />
    <User2 name="Tim" />
    <User3 name="Tim" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
