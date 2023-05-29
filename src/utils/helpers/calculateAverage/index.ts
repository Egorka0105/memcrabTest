import { nanoid } from 'nanoid';
import { ICell } from 'utils/types';

export const calculateAverage = (table: ICell[][]): ICell[] => {
  // Check if the table is empty
  if (!table.length || !table[0].length) {
    return [];
  }

  // the length of the element array horizontally
  const rowLength = table.length;
  // the length of the element array vertically
  const columnLength = table[0].length;

  const resultArray: ICell[] = [];

  for (let columnCount = 0; columnCount < columnLength; columnCount++) {
    // Calculate the sum of each column
    const columnSum = table.reduce((sum, row) => sum + row[columnCount].amount, 0);
    // Calculate the average by dividing the column sum by the number of rows
    const average = columnSum / rowLength;

    // Push the result with generated id into the resultArray
    resultArray.push({
      id: nanoid(),
      amount: +average.toFixed(0),
    });
  }

  return resultArray;
};
