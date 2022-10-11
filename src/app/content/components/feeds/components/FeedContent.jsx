import React from 'react';
import image from '../../../../../assets/img/blue.png';

export const FeedContent = () => (
  <div className='feeds-item_content'>
    <p>Hello world</p>
    <img src={image} className='feeds-item_content__img' alt='' />
  </div>
);
