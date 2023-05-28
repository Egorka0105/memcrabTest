import { FC, useContext } from 'react';
import { context } from 'TableProvider';
import { ICell } from 'utils';
import styles from './index.module.scss';

interface CellProps {
  data: ICell;
  rowIndex: number;
  columnIndex: number;
}

export const Cell: FC<CellProps> = ({ data, rowIndex, columnIndex }) => {
  const { increaseAmount } = useContext(context);
  const handleClick = () => {
    increaseAmount(rowIndex, columnIndex);
  };

  return (
    <div onClick={handleClick} className={styles.cell}>
      {data.amount}
    </div>
  );
};
