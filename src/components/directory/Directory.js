import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sectionsSelector } from '../../redux/directory/directorySelector';
import MenuItems from '../menuitems/MenuItems';
import './directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItems key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  sections: sectionsSelector,
});

export default connect(mapStatetoProps)(Directory);
