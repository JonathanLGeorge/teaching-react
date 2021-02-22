import React, { Component } from "react";

export class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: "",
    };

    //this.onFormSubmit = this.onFormSubmit.bind(this) //this is refering to out SearchInput class object
  }

  // onInputChange(event) {
  //   console.log(event.target.value);

  // }

  //submitting the form
  onFormSubmit = (event) => {
    //this makes it so our form doesnt auto refresh the page on submit
    event.preventDefault();
    console.log(this.state.entry); //remembr this is when we submit the form

    //this is our callback function that is inside out App.js
    //we are passing back our updated state back up to App.js
    //onSearchSubmit is a props passed in to SearchInput from App.js
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(event) =>
                  this.setState({ entry: event.target.value.toUpperCase() })
                }
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
        {this.state.entry}
      </div>
    );
  }
}

export default SearchInput;
