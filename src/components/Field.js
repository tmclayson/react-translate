import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import LanguageContext from '../contexts/LanguageContext';
// import PropTypes from 'prop-types';

export default class Field extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <Form.Field>
        <label>{text}</label>
        <input type="text" />
      </Form.Field>
    );
  }
}
