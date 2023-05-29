import { FC, useContext } from 'react';
import classNames from 'classnames';
import { context } from 'TableProvider';
import { ICell } from 'utils';
import styles from './index.module.scss';

interface CellProps {
  data: ICell;
  rowIndex: number;
  columnIndex: number;
  percent: number;
  percentTrigger: boolean;
  isNearest: boolean;
}

export const Cell: FC<CellProps> = ({ data, rowIndex, columnIndex, percent, percentTrigger, isNearest = false }) => {
  const { increaseAmount, findNearestCells, setNearest } = useContext(context);
  const handleClick = () => {
    increaseAmount(rowIndex, columnIndex);
  };

  const onMouseEnter = () => {
    findNearestCells({ row: rowIndex, column: columnIndex });
  };

  const onMouseLeave = () => {
    setNearest(null);
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(styles.cell, { [styles.nearest]: isNearest })}
      style={{
        background: percentTrigger ? `linear-gradient(0deg, #FF2475FF ${percent}%, transparent ${percent}%)` : '',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {percentTrigger ? `${percent}%` : data.amount}
    </div>
  );
};
