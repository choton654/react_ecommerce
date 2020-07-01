import React from 'react';
import { withRouter } from 'react-router-dom';
import PreviewItems from '../previewItems/PreviewItems';
import './preview.scss';

const Preview = ({ title, items, history, match, routename }) => {
  return (
    <div className='collection-preview'>
      <h1
        style={{ cursor: 'pointer' }}
        onClick={() => history.push(`shop/${routename}`)}
        className='title'>
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <PreviewItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(Preview);
