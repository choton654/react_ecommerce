import React, { Component } from 'react';
import PreviewPage from '../previewPage/PreviewPage';
import SHOP_DATA from '../shopData';

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
