import { FC, useContext } from 'react';
import { context } from 'TableProvider';
import styles from './index.module.scss';

export const AddRow: FC = () => {
  const { addRow } = useContext(context);

  return (
    <button className={styles.add_row} onClick={addRow} type="button">
      Add Row
    </button>
  );
};
