import React, { Component } from 'react';
import { Button as BaseButton } from 'semantic-ui-react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// import PropTypes from 'prop-types';

export default class Button extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  // must be called contextType
  // adds a property to the class itself
  // could also write Button.contextType = LanguageContext; after the class declaration
  // static contextType = LanguageContext; -- we don't need this if we use a consumer instead to access the context

  renderButton(color) {
    return (
      <BaseButton color={color}>
        <LanguageContext.Consumer>{value => this.renderSubmit(value)}</LanguageContext.Consumer>
      </BaseButton>
    );
  }
  // WE USE CONSUMER WHENEVER WE WANT TO GET INFORMATION FROM MORE THAN ONE CONTEXT
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }
  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // the function is automatically called by the consumer with whatever current value is in the pipe
    return (
      <>
        <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>
      </>
    );
  }
}
