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

const hoc3 = BaseComponent =>
  class extends React.Component {
    shouldComponentUpdate() {
      return true; //false: 업데이트 되더라도 변경되지 않음
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  };

const User3 = hoc2({ name: "Bob" })(User);
const User4 = hoc3(User);
const User2 = hoc(User);

class App extends React.Component {
  state = {
    name: "Kim"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "김" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <User name="Tim" />
        <User2 name="Tim" />
        <User3 name="Tim" />
        <User4 name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
