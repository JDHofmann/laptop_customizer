import React, { Component } from 'react';
import './FeaturesItem.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class FeaturesItem extends Component {
  render() {
    const feature = this.props.feature;
    const item = this.props.item;
    const itemHash = this.props.itemHash;

    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[feature].name}
          onChange={e => this.props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    )
  }
}
