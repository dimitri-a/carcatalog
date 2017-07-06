import React, {Component} from 'react';
import {FavoriteCar} from 'components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div>
        <FavoriteCar/>
      </div>
    );
  }
}
