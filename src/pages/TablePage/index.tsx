import { FC } from 'react';
import { GoBackButton } from 'Components';
import { Table } from 'Components/Table';
import { TableProvider } from 'TableProvider';
import styles from './index.module.scss';

export const TablePage: FC = () => (
  <TableProvider>
    <div className={styles.table_wrapper}>
      <GoBackButton />
      <Table />
    </div>
  </TableProvider>
);
