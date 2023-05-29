import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'utils/types';

interface RemoveRow {
  (setState: Dispatch<SetStateAction<ICell[][]>>): (rowIndex: number) => void;
}

export const removeRow: RemoveRow = (setState) => (rowIndex) => {
  setState((prevState) => {
    // create a copy of the previous state array
    const updatedCells = [...prevState];

    // remove the row at the specified index using splice
    updatedCells.splice(rowIndex, 1);

    // return the updated state array
    return updatedCells;
  });
};
