import FriendListItem from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ name, avatar, id, isOnline }) => (
        <li key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
