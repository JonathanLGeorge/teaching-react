import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class NavContext extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, darkTheme, lightTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <nav
        style={{
          background: theme.background,
          color: theme.text,
          height: "120px",
        }}
      >
        <h2 className={{ textAlign: "center" }}>Learning stuff</h2>
        <div className="ui three buttons">
          <button>Overview</button>
          <button>Contact</button>
          <button>Support</button>
        </div>
      </nav>
    );
  }
}

export default NavContext;
