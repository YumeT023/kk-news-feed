import { useEffect, useState } from 'react';
import { deleteById, getAll } from '../../utils/api';
import { printLong } from '../../utils/date';

const FeedMenu = ({ id }) => {
  const handleDelete = async () => {
    await deleteById('feeds', id);
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

const FeedContent = ({ children, imgURL }) => (
  <div className='feeds-item_content'>
    <p>{children}</p>
    <img src={imgURL} className='feeds-item_content__img' alt='error' />
  </div>
);

const FeedHeader = ({ children, avatar, postingDate, id }) => {
  const [menuIsOn, setMenuIsOn] = useState(false);

  const handleClick = () => {
    setMenuIsOn(!menuIsOn);
  };

  return (
    <div className='feeds-item_header'>
      <div className='feeds-item_header__avatar'>
        <img src={avatar} alt='' />
      </div>

      <div className='feeds-item_header__post-info'>
        <h6>{children}</h6>
        <span>{printLong(postingDate)}</span>
      </div>

      <div className='feeds-item_header__menu' onClick={handleClick}>
        <i className='fas fa-folder' />
        {menuIsOn && <FeedMenu id={id} />}
      </div>
    </div>
  );
};

const FeedItem = ({ data }) => {
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

export const FeedList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAll('feeds');
        setData(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    void fetch();
  }, []);

  return (
    <div className='feeds'>
      {data.map(feed => (
        <FeedItem key={feed.id} data={feed} />
      ))}
    </div>
  );
};
