import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'utils/types';

export const removeRow = (setState: Dispatch<SetStateAction<ICell[][]>>) => (rowIndex: number) => {
  setState((prevState) => {
    const updatedCells = [...prevState];
    updatedCells.splice(rowIndex, 1);
    return updatedCells;
  });
};
