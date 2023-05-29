import { FC, useContext } from 'react';
import { context } from 'TableProvider';
import { ICell } from 'utils';
import styles from './index.module.scss';

interface CellProps {
  data: ICell;
  rowIndex: number;
  columnIndex: number;
  percent: number;
  percentTrigger: boolean;
}

export const Cell: FC<CellProps> = ({ data, rowIndex, columnIndex, percent, percentTrigger }) => {
  const { increaseAmount } = useContext(context);
  const handleClick = () => {
    increaseAmount(rowIndex, columnIndex);
  };

  return (
    <div
      onClick={handleClick}
      className={styles.cell}
      style={{
        background: percentTrigger ? `linear-gradient(0deg, #FF2475FF ${percent}%, transparent ${percent}%)` : '',
      }}
    >
      {percentTrigger ? `${percent}%` : data.amount}
    </div>
  );
};
