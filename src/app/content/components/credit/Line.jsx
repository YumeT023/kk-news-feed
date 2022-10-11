import React from 'react';

export const Line = ({ name, children, action }) => (
  <div className='line-credit'>
    {children || name} {action && `[${action}]`}
  </div>
);
