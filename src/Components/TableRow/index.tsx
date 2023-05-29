import { FC, memo, SyntheticEvent, useCallback, useContext, useState } from 'react';
import removeRowIcon from 'assets/images/removeRow.svg';
import { Cell } from 'Components/Cell';
import { context } from 'TableProvider';
import { calculatePercent, findSum } from 'utils/helpers';
import { ICell } from 'utils/types';
import styles from './index.module.scss';

interface TableRowProps {
  data: ICell[];
  rowIndex: number;
}

export const TableRow: FC<TableRowProps> = memo(({ data, rowIndex }) => {
  const [percent, setPercent] = useState(false);
  const { removeRow, nearest } = useContext(context);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    removeRow(+name);
  };

  const dataSum: number = findSum(data);

  const handleOnMouseLeave = useCallback(() => {
    setPercent(false);
  }, [percent, setPercent]);

  const handleOnMouseEnter = useCallback(() => {
    setPercent(true);
  }, [percent, setPercent]);

  return (
    <div className={styles.row}>
      {data.map((item: ICell, index: number) => (
        <Cell
          key={item.id}
          data={item}
          rowIndex={rowIndex}
          columnIndex={index}
          percent={calculatePercent(dataSum, item.amount)}
          percentTrigger={percent}
          isNearest={nearest ? nearest.some((i) => i.amount === item.amount) : false}
        />
      ))}

      <div onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} className={styles.row__sum}>
        {dataSum}
      </div>

      <button name={`${rowIndex}`} onClick={handleClick} className={styles.row__remove} role="button" type="button">
        <img src={removeRowIcon} alt="removeRow" height={20} width={20} />
      </button>
    </div>
  );
});
