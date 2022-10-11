import React from 'react';
import logo from '../../../../../assets/img/blue.png';

export const FeedHeader = () => (
  <div className='feeds-item_header'>
    <div className='feeds-item_header__avatar'>
      <img src={logo} alt='' />
    </div>

    <div className='feeds-item_header__post-info'>
      <h6>name</h6>
      <span>{new Date().toLocaleDateString()}</span>
    </div>

    <div className='feeds-item_header__menu'>
      <i className='fas fa-folder' />
    </div>
  </div>
);
