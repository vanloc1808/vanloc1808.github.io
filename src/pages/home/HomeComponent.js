import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import Button from "../../components/button/Button";

// import {greeting} from "../../portfolio.js";

class Home extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <div>
        <Header theme={this.props.theme} />

        <Greeting theme={this.props.theme}></Greeting>

        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
