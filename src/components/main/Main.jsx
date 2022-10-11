import { FeedList } from './Feed';
import { Credit } from './Credit';
import './style.css';

export const Main = () => (
  <div className='content'>
    <FeedList />
    <Credit />
  </div>
);
