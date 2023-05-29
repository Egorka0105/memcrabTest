import { nanoid } from 'nanoid';
import { findSum } from 'utils/helpers/findSum';
import { ICell } from 'utils/types';

interface IRes {
  sumAvg: number;
  cellsArrayAvg: ICell[];
}

export const calculateAverage = (table: ICell[][]): IRes => {
  const res: IRes = {
    sumAvg: 0,
    cellsArrayAvg: [],
  };

  // Check if the table is empty
  if (!table.length || !table[0].length) {
    return res;
  }

  // the length of the element array horizontally
  const rowLength = table.length;
  // the length of the element array vertically
  const columnLength = table[0].length;

  for (let columnCount = 0; columnCount < columnLength; columnCount++) {
    // Calculate the sum of each column
    const columnSum = table.reduce((sum, row) => sum + row[columnCount].amount, 0);
    // Calculate the average by dividing the column sum by the number of rows
    const average = columnSum / rowLength;

    // Push the result with generated id into the resultArray
    res.cellsArrayAvg.push({
      id: nanoid(),
      amount: +average.toFixed(0),
    });
  }

  // it`s average of all sum cells
  // I first find and add the sum of all rows and divide it by the length of the array of average values
  // and round to 0
  res.sumAvg = +(table.reduce((sum, row) => sum + findSum(row), 0) / res.cellsArrayAvg.length).toFixed(0);

  return res;
};
