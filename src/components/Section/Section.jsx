import css from './Section.module.css';

export const Section = ({ title='', children }) => {
  return (
    <section>
      {title && <h2 className={css.section}>{title}</h2>}
      {children}
    </section>
  );
};
