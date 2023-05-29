export interface FormRequest {
  rows: number;
  columns: number;
  cells: number;
}

export type CellId = number | string;
export type CellValue = number;

export interface ICell {
  id: CellId;
  amount: CellValue;
}

export type TableData = ICell[][];

export interface ICellPosition {
  row: number;
  column: number;
}
