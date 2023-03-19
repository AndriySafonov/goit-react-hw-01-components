import PropTypes from "prop-types";
import './Friends.css'
export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className="item">
      <span className={`status ${isOnline ? 'online' : 'ofline'}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.oneOf(['online', 'ofline']),
  }),
};
