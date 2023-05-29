import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'utils/types';

interface IncreaseAmount {
  (setState: Dispatch<SetStateAction<ICell[][]>>): (rowIndex: number, columnIndex: number) => void;
}

export const increaseAmount: IncreaseAmount = (setState) => (rowIndex, columnIndex) => {
  setState((prevState) => {
    // create a copy of the previous state array
    const updatedCells = [...prevState];

    // increment the amount property of the specified cell
    updatedCells[rowIndex][columnIndex].amount += 1;

    // return the updated state array
    return updatedCells;
  });
};
