import React from "react";
import Obniz from "obniz";

export default class ObnizSwitchState extends React.Component {
  constructor(props) {
    super();
    this.state = {switchState: "unknown"};

    if (props.obniz.connectionState === "connected") {
      this.setupObniz();
    } else {
      props.obniz.on('connect', () => {
        this.setupObniz();
      })
    }
  }

  setupObniz() {
    this.props.obniz.switch.onchange = (state) => {
      this.setState({switchState: state})
    }
  }


  render() {
    return (
      <span>{this.state.switchState}</span>
    );
  }
}
