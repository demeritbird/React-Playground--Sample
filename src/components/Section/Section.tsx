import { Fragment } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

function Section(props: SectionProps) {
  const { title = 'Template', children } = props;

  return (
    <Fragment>
      <section className={styles.section}>
        <h3>{title} Section</h3>
        {children}
      </section>
    </Fragment>
  );
}

export default Section;
