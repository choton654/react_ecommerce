import React from 'react';
import './menuitems.scss';

const MenuItems = ({ title, imageUrl, linkUrl, size }) => {
  return (
    <div className={`${size} menu-items`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
