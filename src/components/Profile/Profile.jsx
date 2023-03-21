import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers - </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views - </span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes - </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};



