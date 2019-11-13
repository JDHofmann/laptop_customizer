import React, { Component } from 'react';
// import './Customize.css';
//import Features from '../Features/Features.js';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Customize extends Component {
  render() {
    return (
      <div></div>
    )
  }
}
export default Customize
