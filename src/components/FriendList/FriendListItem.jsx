import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClass = isOnline ? css['status-online'] : css['status-offline'];
  return (
    <li className={css.item}>
     <span className={`${css.status} ${statusClass}`}/>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
