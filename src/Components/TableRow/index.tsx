import { FC, SyntheticEvent, useContext } from 'react';
import removeRowIcon from 'assets/images/removeRow.svg';
import { Cell } from 'Components/Cell';
import { context } from 'TableProvider';
// import cn from 'classnames';
// import { nanoid } from 'nanoid';
import { ICell } from 'utils';
import { findSum } from 'utils/helpers/findSum';
import styles from './index.module.scss';

interface TableRowProps {
  data: ICell[];
  rowIndex: number;
}

export const TableRow: FC<TableRowProps> = ({ data, rowIndex }) => {
  const { removeRow } = useContext(context);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    removeRow(+name);
  };

  return (
    <div className={styles.row}>
      {data.map((item: ICell, index: number) => (
        <Cell key={item.id} data={item} rowIndex={rowIndex} columnIndex={index} />
      ))}

      <div className={styles.row__sum}>{findSum(data)}</div>

      <button name={`${rowIndex}`} onClick={handleClick} className={styles.row__remove} role="button" type="button">
        <img src={removeRowIcon} alt="removeRow" height={20} width={20} />
      </button>
    </div>
  );
};
