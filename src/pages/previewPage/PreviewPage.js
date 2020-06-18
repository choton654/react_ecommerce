import React from 'react';
import PreviewItems from '../previewItems/PreviewItems';
import './previewPage.scss';

const PreviewPage = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
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

export default PreviewPage;
