import React, { useEffect, useState } from 'react';
import '../assets/style/feeds.css';
import { Feed } from './feed';
import axios from 'axios';
import { api } from '../utils/api';

export const Feeds = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = axios.get(api + '/feeds');
    promise
      .then(({data}) => setData(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='feeds'>
      {(data || []).map(feed => (
        <Feed key={feed.id} data={feed} />
      ))}
    </div>
  );
};
