import { Dispatch, SetStateAction } from 'react';
import { FormRequest, ICell, ICellPosition } from 'utils/types';

export const findNearestCells =
  (table: ICell[][], { cells }: FormRequest, setState: Dispatch<SetStateAction<ICell[] | null>>) =>
  (hoveredCell: ICellPosition): void => {
    if (!hoveredCell) {
      return;
    }
    const hoveredAmount = table[hoveredCell?.row][hoveredCell?.column].amount;
    const sortedCells = table
      .flat()
      .sort((a, b) => Math.abs(a.amount - hoveredAmount) - Math.abs(b.amount - hoveredAmount));
    setState(sortedCells.slice(1, cells + 1));
  };
