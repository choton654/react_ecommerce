import React from 'react';
import PreviewItems from './PreviewItems';
import './previewPage.scss';

const PreviewPage = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <PreviewItems key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewPage;
