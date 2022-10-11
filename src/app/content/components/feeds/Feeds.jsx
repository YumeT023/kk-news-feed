import React, { useState } from 'react';
import './feeds.css';
import { Feed } from './components';

export const Feeds = () => {
  const [data, setData] = useState([]);

  return (
    <div className='feeds'>
      {(data || []).map((feed, index) => (
        <Feed key={index} data={feed} />
      ))}
    </div>
  );
};
