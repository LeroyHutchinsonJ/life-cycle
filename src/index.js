import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ErrorCatcher extends React.Component {
  state = { error: null };

  componentDidCatch(error, info) {
    console.log("[componentDidCatch]", error);
    this.setState({ error: info.componentStack });
  }
  render() {
    if (this.state.error) {
      return <div>An Error Occured {this.state.error}</div>;
    }
    return this.props.children;
  }
}

class LifeCycleDemo extends React.Component {
  state = { counter: 0 };

  constructor(props) {
    super(props);
    console.log("[constructor");
    console.log("State already set", this.state);
  }

  componentDidMount() {
    console.log("[componentDidMount]", "Mounted");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[getDerivedStateFromProps");
    console.log("   Next props:", nextProps);
    console.log("   Prev state:", prevState);
    return null;
  }

  shouldComponentUpdate(nextProps, prevProps) {
    console.log("[shouldComponentUpdate", "Deciding to update");
    return true;
  }

  render() {
    return <div />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LifeCycleDemo />, rootElement);
