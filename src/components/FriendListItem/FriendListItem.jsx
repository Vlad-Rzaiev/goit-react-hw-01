import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
  friendInfo: { avatar, name, isOnline },
}) {
  return (
    <div className={css.friendListItemWrap}>
      <img
        className={css.friendListItemImg}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.friendListItemTitle}>{name}</p>
      <p
        className={clsx(
          css.friendListItemStatus,
          isOnline ? css.online : css.offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
