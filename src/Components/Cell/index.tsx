import { FC, memo, useCallback, useContext, useMemo } from 'react';
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

export const Cell: FC<CellProps> = memo(
  ({ data, rowIndex, columnIndex, percent, percentTrigger, isNearest = false }) => {
    const { increaseAmount, findNearestCells, setNearest } = useContext(context);

    const handleClick = useCallback(() => {
      increaseAmount(rowIndex, columnIndex);
    }, [increaseAmount, rowIndex, columnIndex]);

    const onMouseEnter = useCallback(() => {
      findNearestCells({ row: rowIndex, column: columnIndex });
    }, [findNearestCells, rowIndex, columnIndex]);

    const onMouseOut = useCallback(() => {
      setNearest(null);
    }, [setNearest]);

    const cellStyle = useMemo(
      () => ({
        background: percentTrigger ? `linear-gradient(0deg, #FF2475FF ${percent}%, transparent ${percent}%)` : '',
      }),
      [percentTrigger, percent]
    );

    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <div
        onClick={handleClick}
        className={classNames(styles.cell, { [styles.nearest]: isNearest })}
        style={cellStyle}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      >
        {percentTrigger ? `${percent}%` : data.amount}
      </div>
    );
  }
);
