import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render() {
    return (
      <button id="sidenav"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
 
export default MenuButton;