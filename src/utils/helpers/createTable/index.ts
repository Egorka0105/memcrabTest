import { nanoid } from 'nanoid';
import { createRandomAmount } from 'utils/helpers/createRandomAmount';
import { ICell, TableData } from 'utils/types';

export const createTable = (rows: number, columns: number): TableData => {
  const tableData: TableData = [];

  for (let i = 0; i < rows; i++) {
    const rowData: ICell[] = [];

    for (let j = 0; j < columns; j++) {
      rowData.push({ id: nanoid(), amount: createRandomAmount() });
    }

    tableData.push(rowData);
  }

  return tableData;
};
