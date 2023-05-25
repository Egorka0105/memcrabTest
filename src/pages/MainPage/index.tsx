import { FC } from 'react';
import { Form } from 'Components';
import styles from './index.module.scss';

export const MainPage: FC = () => (
  <div className={styles.home}>
    <h1 className={styles.home__title}>Matrix builder</h1>

    <Form />
  </div>
);
