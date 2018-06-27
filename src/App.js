import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // changeColor: false,
      slide: false
    };
    //   this.handlColorChange = this.handlColorChange.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }
  // handlColorChange() {
  //   this.setState({ changeColor: !this.state.changeColor });
  // }
  handleSlide() {
    this.setState({ slide: !this.state.slide });
  }

  render() {
    return (
      <div className={"App"}>
        <nav className="nav">
          <span className="logo">Start Bootstrap</span>
          <div className="links-container">
            <span className="link">SERVICES</span>
            <span className="link">PORTFOLIO</span>
            <span className="link">ABOUT</span>
            <span className="link">TEAM</span>
            <span className="link">CONTACT</span>
            <span onClick={this.handleSlide} className="ham">
              Menu &#9776;
            </span>
          </div>
        </nav>
        <div classsName="link2">
          <span className={!this.state.slide ? "links" : "test"}>SERVICES</span>
          <span className={!this.state.slide ? "links" : "test"}>PORTFOLIO</span>
          <span className={!this.state.slide ? "links" : "test"}>ABOUT</span>
          <span className={!this.state.slide ? "links" : "test"}>TEAM</span>
          <span className={!this.state.slide ? "links" : "test"}>CONTACT</span>
        </div>

        <nav className="nav2" />

        <div clasName="bodytext">
          <p className="p1">Welcome To Our Studio!</p>
          <p className="p2">IT'S NICE TO MEET YOU</p>
        </div>
        <button className="myButton">TELL ME MORE</button>
      </div>
    );
  }
}

export default App;
