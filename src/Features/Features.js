import React, { Component } from 'react';
import './Features.css';
import FeaturesItem from '../FeaturesItem/FeaturesItem.js';
import slugify from 'slugify';


class Features extends Component {
  render() {
    const feature = this.props.feature
    const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeaturesItem
            feature={feature}
            item={item}
            itemHash={itemHash}
            selected={this.props.selected}
            key={itemHash}
            updateFeature={this.props.updateFeature}
          />
        );
      });
    return (
      <fieldset className="feature">
          <legend className="feature__name">
            <h3>{this.props.feature}</h3>
          </legend>
          {options}
        </fieldset>
    )
  }
}

export default Features
