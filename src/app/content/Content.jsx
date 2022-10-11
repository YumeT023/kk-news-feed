import React from 'react';
import './content.css';
import { Credit } from './components/credit';
import { Feeds } from './components/feeds';

export const Content = () => (
  <div className='content'>
    <Feeds />
    <Credit />
  </div>
);
