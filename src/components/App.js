import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

export default class App extends Component {
  // each LanguageContext.Provider component creates a separate pipe of information to the wrapped component
  // unwrapped components will use the default value
  render() {
    return (
      <div>
        <Container>
          <LanguageStore>
            <LanguageSelector />
            <ColorContext.Provider value="facebook">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </Container>
      </div>
    );
  }
}
