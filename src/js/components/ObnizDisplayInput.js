import React from "react";

export default class ObnizDisplayInput extends React.Component {
  handleChange(e){
    const text = e.target.value;
    if(this.props.obniz.connectionState === "connected"){
      this.props.obniz.display.clear();
      this.props.obniz.display.print(text);
    }
  }
  render() {
    return (

        <input value={this.props.value} onChange={this.handleChange.bind(this)} />

    );
  }
}
