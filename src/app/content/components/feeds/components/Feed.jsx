import React, { useEffect } from 'react';
import { FeedHeader } from './FeedHeader';
import { FeedContent } from './FeedContent';

export const Feed = ({ data }) => {
  const {
    description,
    postingDate,
    imgURL,
    user: { name, avatarURL },
  } = data;

  return (
    <div className='feeds-item'>
      <FeedHeader avatar={avatarURL ? avatarURL : null} postingDate={postingDate}>
        {name}
      </FeedHeader>
      <FeedContent imgURL={imgURL}>{description}</FeedContent>
    </div>
  );
};
