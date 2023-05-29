import { FC, useContext } from 'react';
import { context } from 'TableProvider';
import { calculateAverage } from 'utils/helpers/calculateAverage';
import styles from './index.module.scss';

export const TableAverage: FC = () => {
  const { table } = useContext(context);

  const { sumAvg, cellsArrayAvg } = calculateAverage(table);

  return (
    <div className={styles.average}>
      {cellsArrayAvg.map((item) => (
        <div className={styles.average__cell} key={item.id}>
          {item.amount}
        </div>
      ))}

      <div className={styles.average__sum}>{sumAvg}</div>
    </div>
  );
};
