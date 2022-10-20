import React, { useState } from 'react';
import { printLong } from '../../utils/date';
import { FeedMenu } from './FeedMenu';

export const FeedHeader = ({ children, avatar, postingDate, id }) => {
  const [menuIsOn, setMenuIsOn] = useState(false);

  const handleClick = () => {
    setMenuIsOn(!menuIsOn);
  };

  return (
    <div className='feeds-item_header'>
      <div className='feeds-item_header__avatar'>
        <img src={avatar} alt='' />
      </div>

      <div className='feeds-item_header__post-info'>
        <h6>{children}</h6>
        <span>{printLong(postingDate)}</span>
      </div>

      <div className='feeds-item_header__menu' onClick={handleClick}>
        <i className='fas fa-folder' />
        {menuIsOn && <FeedMenu id={id} />}
      </div>
    </div>
  );
};
