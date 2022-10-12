import React, { useState } from 'react';
import { dataProvider } from '../../../../../providers/data-provider';

export const FeedMenu = ({ id }) => {
  const handleDelete = async () => {
    await dataProvider.deleteById('feeds', id);
    window.location.reload();
  };

  return (
    <div className='feed-menu'>
      <div className='feed-menu_item' onClick={handleDelete}>
        <span>delete</span>
        <i className='fas fa-trash' />
      </div>
    </div>
  );
};
