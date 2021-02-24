import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
const NavBar = (props) => {
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment">Jonathan</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <Link to="/about">About</Link>
        </button>
        <button className="ui button">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </nav>
  );
};

//withRouter is a higher order component
//export default withRouter(NavBar);
//NaveLink will add in a class="active" to our <a>

export default NavBar;
