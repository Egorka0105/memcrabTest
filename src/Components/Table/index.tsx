import { FC, useContext } from 'react';
import { AddRow } from 'Components/AddRow';
import { TableRow } from 'Components/TableRow';
import { nanoid } from 'nanoid';
import { context } from 'TableProvider';
import { ICell } from 'utils';
import styles from './index.module.scss';

export const Table: FC = () => {
  const { table } = useContext(context);

  return (
    <div className={styles.table}>
      <AddRow />

      {table.map((item: ICell[], index: number) => (
        <TableRow key={nanoid()} data={item} rowIndex={index} />
      ))}
    </div>
  );
};