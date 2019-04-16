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
    return <div />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ErrorCatcher />, rootElement);
