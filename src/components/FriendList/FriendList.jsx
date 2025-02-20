import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li className={css.friendItem} key={friend.id}>
          <FriendListItem friendInfo={friend} />
        </li>
      ))}
    </ul>
  );
}
