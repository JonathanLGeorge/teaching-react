import React, { Component } from "react";

export class Card extends Component {
  state = { user: "" };
  componentDidMount() {
    //When this component is being used as a route,
    //we get access to the extra info on the props object
    let user = this.props.match.params.user;
    // console.log('here we can see the history: match: params: user: "?????" ');
    // console.log(this.props);
    this.setState({ user: user }); //ES5 we can just do {user} if the key and value are the same... but that can be confussing
  }
  render() {
    //const { user } = this.state; //optional destructure
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">{this.state.user}</h3>
      </div>
    );
  }
}

export default Card;
