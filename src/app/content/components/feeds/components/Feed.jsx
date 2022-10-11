import React from 'react';
import { FeedHeader } from './FeedHeader';
import { FeedContent } from './FeedContent';

export const Feed = feed => {
  const {
    description,
    postingDate,
    imgURL,
    user: { name, avatarURL },
  } = feed;

  return (
    <div className='feeds-item'>
      <FeedHeader avatar={avatarURL} postingDate={postingDate}>
        {name}
      </FeedHeader>
      <FeedContent imgURL={imgURL}>{description}</FeedContent>
    </div>
  );
};
