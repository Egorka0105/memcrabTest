import { Dispatch, SetStateAction } from 'react';
import { nanoid } from 'nanoid';
import { createRandomAmount } from 'utils/helpers/createRandomAmount';
import { ICell } from 'utils/types';

export const addRow = (setState: Dispatch<SetStateAction<ICell[][]>>) => {
  setState((prevState) => {
    const newRow: ICell[] = [];
    for (let i = 0; i < prevState[0].length; i++) {
      const cell: ICell = {
        id: nanoid(),
        amount: createRandomAmount(),
      };
      newRow.push(cell);
    }
    return [...prevState, newRow];
  });
};
