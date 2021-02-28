import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import PropsDemo from "./components/PropsDemo";
import pic1 from "./img/servbots.JPG";
import pic2 from "./img/servbotdrill.JPG";
import ClassDemo from "./components/ClassDemo";
import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import TodoList from "./components/TodoList";

//context
import ThemeContextProvider from './context/ThemeContext'
class App extends React.Component {
  state = {
    images: [],
    searchWord: "",
  };

  onSearchSubmit = async (entry) => {
    console.log("this is our callback returning: " + entry);
    this.setState({ searchWord: entry });
    const response = await axios.get(
      `https://pixabay.com/api/?key=18450117-e789e7e7bce928304931a9008&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  };
  render() {
    //we could use a Switch tag for the routes. but what we have is fine
    return (
      <BrowserRouter>
        <div className="App">
          <ThemeContextProvider>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/card/:user" component={Card} />

          <TodoList/>
          </ThemeContextProvider>
          

          <TodoList/>
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

            <p>We have found {this.state.images.length} images.</p>
          </div>
          <ImageList images={this.state.images} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
