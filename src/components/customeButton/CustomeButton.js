import React from 'react';
import './customeButton.scss';

const CustomeButton = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} custom-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default CustomeButton;
