import React from 'react';
import { printLong } from '../../../../../utils/date';

export const FeedHeader = ({ children, avatar, postingDate }) => (
  <div className='feeds-item_header'>
    <div className='feeds-item_header__avatar'>
      <img src={avatar} alt='' />
    </div>

    <div className='feeds-item_header__post-info'>
      <h6>{children}</h6>
      <span>{printLong(postingDate)}</span>
    </div>

    <div className='feeds-item_header__menu'>
      <i className='fas fa-folder' />
    </div>
  </div>
);
