import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render() {
    var visibility = "hide";
    console.log(this.props.menuVisibility)
    if (this.props.menuVisibility) {
        console.log("hai");
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><a href="#">people   </a></h2>
        <h2><a href="#">chat   </a></h2>
        <h2><a href="#">search</a></h2>
      </div>
    );
  }
}
 
export default Menu;