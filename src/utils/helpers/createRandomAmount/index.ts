import { CellValue } from 'utils/types';

export const createRandomAmount = (): CellValue => Math.floor(Math.random() * 1000);
