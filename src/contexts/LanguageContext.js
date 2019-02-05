// put in a separate file so that it is imported only into the components that need it
import React, { Component } from 'react';

const Context = React.createContext('english');

export class LanguageStore extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    // console.log(this.onLanguageChange);
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
