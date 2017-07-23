import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {greatPlaceStyle} from './MyGreatPlace_Styles';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
      <div style={greatPlaceStyle}>
        {this.props.text}
      </div>
    );
  }
}