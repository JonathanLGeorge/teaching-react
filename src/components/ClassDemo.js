import React, { Component } from "react";
import Hemisphere from "./Hemisphere";

export class ClassDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: "",
    };

    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.setState({ lat: position.coords.latitude });
    //   },
    //   (error) => {
    //     this.setState({ errorMessage: error.message });
    //   }
    // );
  }

  //this is where we want to do our dataloading
  componentDidMount() {
    console.log("componentDidMount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <Hemisphere lat={this.state.lat} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default ClassDemo;
