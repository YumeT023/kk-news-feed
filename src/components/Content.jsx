import React from 'react';
import '../assets/style/content.css';
import { Credit } from './Credit';
import { Feeds } from './Feeds';

export const Content = () => (
  <div className='content'>
    <Feeds />
    <Credit />
  </div>
);
