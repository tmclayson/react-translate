import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

export default class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language }); // key and value are the same
  };
  // each LanguageContext.Provider component creates a separate pipe of information to the wrapped component
  // unwrapped components will use the default value
  render() {
    return (
      <div>
        <Container>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <ColorContext.Provider value="facebook">
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </Container>
      </div>
    );
  }
}
