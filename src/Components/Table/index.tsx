import { FC, memo, useContext } from 'react';
import { AddRow } from 'Components/AddRow';
import { TableAverage } from 'Components/TableAverage';
import { TableRow } from 'Components/TableRow';
import { nanoid } from 'nanoid';
import { context } from 'TableProvider';
import { ICell } from 'utils/types';
import styles from './index.module.scss';

export const Table: FC = memo(() => {
  const { table } = useContext(context);

  return (
    <div className={styles.table}>
      <AddRow />

      {table.map((item: ICell[], index: number) => (
        <TableRow key={nanoid()} data={item} rowIndex={index} />
      ))}

      <TableAverage />
    </div>
  );
});
