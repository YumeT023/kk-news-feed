import React, { useEffect } from 'react';
import { FeedHeader } from './FeedHeader';
import { FeedContent } from './FeedContent';

export const Feed = ({ data }) => {
  const {
    id,
    description,
    postingDate,
    imgURL,
    user: { name, avatarURL },
  } = data;

  return (
    <div className='feeds-item'>
      <FeedHeader avatar={avatarURL ? avatarURL : null} postingDate={postingDate} id={id}>
        {name}
      </FeedHeader>
      <FeedContent imgURL={imgURL}>{description}</FeedContent>
    </div>
  );
};
