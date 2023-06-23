import { Credit } from './Credit';
import './content.css';

export const Content = () => (
  <div className='content'>
    <div className='content-feeds'></div>
    <div className='content-credits'>
      <Credit />
    </div>
  </div>
);
