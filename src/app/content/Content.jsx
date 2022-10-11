import React from 'react';
import './content.css';
import { Credit } from './components/credit/Credit';

export const Content = () => (
  <div className='content'>
    <div className='content-feeds'></div>

    <div className='content-credits'>
      <Credit />
    </div>
  </div>
);
