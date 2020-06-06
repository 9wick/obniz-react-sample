import React from "react";
import ObnizDisplayInput from "./ObnizDisplayInput";
import ObnizSwitchState from "./ObnizSwitchState";
import Obniz from "obniz";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.obniz = new Obniz("obniz_id_HERE");
    this.obniz.on('connect',()=>{
      let connectedState = "connected";
      this.setState({connectedState});
    })
    this.obniz.on('close', ()=>{
      let connectedState = "false";
      this.setState({connectedState});
    })
    this.state = {obniz:this.obniz, connectedState:"false"};
  }


  render() {
    return (
      <div>
        obniz state : {this.state.connectedState} <br/>
        <div> DisplayPrint : <ObnizDisplayInput obniz={this.obniz} /> </div>
        <div>SwitchState: <ObnizSwitchState obniz={this.obniz} /></div>
      </div>
    );
  }
}
