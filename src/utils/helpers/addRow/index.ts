import { Dispatch, SetStateAction } from 'react';
import { nanoid } from 'nanoid';
import { STORAGE_KEYS } from 'utils/constants';
import { createRandomAmount } from 'utils/helpers/createRandomAmount';
import { storage } from 'utils/helpers/storage';
import { ICell } from 'utils/types';

interface IAddRow {
  (setState: Dispatch<SetStateAction<ICell[][]>>): void;
}

export const addRow: IAddRow = (setState) => {
  setState((prevState) => {
    const firstRow: ICell[] = prevState[0];

    // if all rows have been deleted a new random string is created
    if (!firstRow) {
      return createRow();
    }
    const newRow: ICell[] = firstRow.map(() => ({
      id: nanoid(),
      amount: createRandomAmount(),
    }));

    // return a new line, adding it to the previous state
    return [...prevState, newRow];
  });
};

const createRow = (): ICell[][] => {
  // get the length of the columns from the local storage because the previous state is []
  const columnLength = storage.getItem(STORAGE_KEYS.FORM_VALUES).columns;

  const newRow: ICell[] = [];
  for (let i = 0; i < columnLength; i++) {
    const cell: ICell = {
      id: nanoid(),
      amount: createRandomAmount(),
    };
    // crating an object array
    newRow.push(cell);
  }
  return [newRow];
};
