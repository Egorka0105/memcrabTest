import { FC, useContext, useMemo, useState } from 'react';
import { context } from 'TableProvider';
import { calculateAverage, calculatePercent } from 'utils/helpers';
import styles from './index.module.scss';

export const TableAverage: FC = () => {
  const [percent, setPercent] = useState(false);
  const { table } = useContext(context);

  const { sumAvg, cellsArrayAvg } = useMemo(() => calculateAverage(table), [table]);

  return (
    <div className={styles.average}>
      {cellsArrayAvg.map((item) => {
        const cellPercent = calculatePercent(sumAvg, item.amount);

        return (
          <div
            className={styles.average__cell}
            key={item.id}
            style={{
              background: percent
                ? `linear-gradient(0deg, #FF2475FF ${cellPercent}%, transparent ${cellPercent}%)`
                : '',
            }}
          >
            {percent ? `${cellPercent}%` : item.amount}
          </div>
        );
      })}

      <div onMouseLeave={() => setPercent(false)} onMouseEnter={() => setPercent(true)} className={styles.average__sum}>
        {sumAvg}
      </div>
    </div>
  );
};
