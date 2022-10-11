import React from 'react';

export const FeedContent = ({ children, imgURL }) => (
  <div className='feeds-item_content'>
    <p>{children}</p>
    <img src={imgURL} className='feeds-item_content__img' alt='error' />
  </div>
);
