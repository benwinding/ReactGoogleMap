import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';

let gmapsApiKey = "AIzaSyBI28vsRKP8Ff1DTUhb3UEST7K9KgwBgTQ";

export default class SimpleMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [-34.9285, 138.6007],
    zoom: 9,
    greatPlaceCoords: {lat: -34.6, lng: 138.80121}
  };

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: gmapsApiKey}}
        center={this.props.center}
        zoom={this.props.zoom}
      >
        <MyGreatPlace lat={-34.955413} lng={138.6007} text={'1'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'2'} /* road circle */ />
      </GoogleMap>
    );
  }
}