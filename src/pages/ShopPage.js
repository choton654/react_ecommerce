import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import PreviewPage from './PreviewPage';

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <PreviewPage key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
