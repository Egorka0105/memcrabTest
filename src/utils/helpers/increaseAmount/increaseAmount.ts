import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'utils/types';

export const increaseAmount =
  (setState: Dispatch<SetStateAction<ICell[][]>>) => (rowIndex: number, columnIndex: number) => {
    setState((prevState) => {
      const updatedCells = [...prevState];
      updatedCells[rowIndex][columnIndex].amount += 1;
      return updatedCells;
    });
  };
