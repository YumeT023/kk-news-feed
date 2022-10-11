import React from 'react';
import './shapes.css';

export const CreditShape = ({ children, klass }) => <div className={`shape credits-shape ${klass}`}>{children}</div>;
