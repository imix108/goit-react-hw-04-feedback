import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticsContainer}>
      <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>
          <span className={css.statisticsItemLabel}>Good: {good}</span>
        </li>
        <li className={css.statisticsItem}>
          <span className={css.statisticsItemLabel}>Neutral: {neutral}</span>
        </li>
        <li className={css.statisticsItem}>
          <span className={css.statisticsItemLabel}>Bad: {bad}</span>
        </li>
        <li className={css.statisticsItem}>
          <span className={css.statisticsItemLabel}>Total: {total}</span>
        </li>
        <li className={css.statisticsItem}>
          <span className={css.statisticsItemLabel}>
            Positive feedback: {positivePercentage}%
          </span>
        </li>
      </ul>
    </div>
  );
};
