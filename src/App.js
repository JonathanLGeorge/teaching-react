import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import PropsDemo from "./components/PropsDemo";
import pic1 from "./img/servbots.JPG";
import pic2 from "./img/servbotdrill.JPG";
import ClassDemo from "./components/ClassDemo";
import SearchInput from "./components/SearchInput";
class App extends React.Component {
  onSearchSubmit = (entry) => {
    console.log("this is our callback returning: " + entry);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PropsDemo
          name="Jon"
          date="Today at 4PM"
          message="React props yeah!"
          pic={pic1}
        />
        <PropsDemo
          name="Jonathan"
          date="Today at 6PM"
          message="Easy right?"
          pic={pic2}
        />
        <br />
        <div>
          <ClassDemo />
        </div>
        <br />
        <br />
        <div className="ui container" style={{ marginTop: "30px" }}>
          <SearchInput onSearchSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
