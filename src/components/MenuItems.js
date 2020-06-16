import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitems.scss';

const MenuItems = ({ title, imageUrl, linkUrl, size, history, match }) => {
  return (
    <div
      className={` menu-items`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItems);
