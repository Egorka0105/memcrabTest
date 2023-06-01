import { CellValue } from 'utils/types';

export const createRandomAmount = (): CellValue => Math.floor(Math.random() * (999 - 100 + 1) + 100);
