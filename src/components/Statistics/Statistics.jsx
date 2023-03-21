import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}
      <ul className={css.stat}>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span>{stat.label}-</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
