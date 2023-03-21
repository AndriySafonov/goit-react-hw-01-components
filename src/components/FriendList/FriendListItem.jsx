import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
};
