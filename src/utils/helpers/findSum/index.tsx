import { ICell } from 'utils/types';

export const findSum = (arr: ICell[]): number =>
  arr.reduce((accumulator: number, { amount }: ICell) => accumulator + amount, 0);
