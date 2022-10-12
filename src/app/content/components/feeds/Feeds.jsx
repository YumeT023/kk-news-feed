import React, { useEffect, useState } from 'react';
import './feeds.css';
import { Feed } from './components';
import { dataProvider } from '../../../../providers/data-provider';

export const Feeds = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setData(await dataProvider.getList('feeds'));
      } catch (e) {
        console.error(e);
      }
    };

    void fetch();
  }, []);

  return (
    <div className='feeds'>
      {(data || []).map(feed => (
        <Feed key={feed.id} data={feed} />
      ))}
    </div>
  );
};
