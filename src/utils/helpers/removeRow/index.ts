import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'utils/types';

interface RemoveRow {
  (setState: Dispatch<SetStateAction<ICell[][]>>): (rowIndex: number) => void;
}

export const removeRow: RemoveRow = (setState) => (rowIndex) => {
  setState((prevState) => {
    const updatedCells = [...prevState];
    updatedCells.splice(rowIndex, 1);
    return updatedCells;
  });
};
