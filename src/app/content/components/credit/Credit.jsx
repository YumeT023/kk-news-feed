import React from 'react';
import './credit.css';
import { CreditShape } from '../shapes';
import { Line } from './Line';

export const Credit = () => (
  <div className='content-credits'>
    <div className='credits'>
      <CreditShape>
        <CreditShape klass='shape-shadow'>
          <h3 className='credits-title'>Credits</h3>
          <Line action='axios'>Tokimahery Ramarozaka</Line>
          <Line action='B. practice'>Yume Saiko</Line>
        </CreditShape>
      </CreditShape>
    </div>
  </div>
);
