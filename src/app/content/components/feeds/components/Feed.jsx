import React from 'react';
import { FeedHeader } from './FeedHeader';
import { FeedContent } from './FeedContent';

export const Feed = feed => (
  <div className='feeds-item'>
    <FeedHeader />
    <FeedContent />
  </div>
);
