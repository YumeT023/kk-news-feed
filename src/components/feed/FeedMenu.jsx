import React from 'react';
import { api } from '../../utils/api';
import axios from 'axios';

export const FeedMenu = ({ id }) => {
  const handleDelete = async () => {
    const promise = axios.delete(api + `/feeds/${id}`);
    promise
      .then(() => window.location.reload())
      .catch(err => console.log(err));
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
