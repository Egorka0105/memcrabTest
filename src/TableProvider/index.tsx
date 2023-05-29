import { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useMemo, useState } from 'react';
import { createTable, FormRequest, ICell, ICellPosition, storage, STORAGE_KEYS } from 'utils';
import { addRow } from 'utils/helpers/addRow';
import { findNearestCells } from 'utils/helpers/findNearestCells';
import { increaseAmount } from 'utils/helpers/increaseAmount/increaseAmount';
import { removeRow } from 'utils/helpers/removeRow';

interface TableProviderProps {
  children: ReactNode;
}

interface TableContextType {
  table: ICell[][];
  addRow: () => void;
  removeRow: (index: number) => void;
  increaseAmount: (rowIndex: number, columnIndex: number) => void;
  nearest: ICell[] | null;
  findNearestCells: (cellPosition: ICellPosition) => void;
  setNearest: Dispatch<SetStateAction<ICell[] | null>>;
}

export const context = createContext<TableContextType>({
  table: [],
  addRow: () => {},
  removeRow: (index) => {},
  increaseAmount: (rowIndex, columnIndex) => {},
  nearest: null,
  findNearestCells: () => {},
  setNearest: () => {},
});

export const TableProvider: FC<TableProviderProps> = ({ children }) => {
  const [table, setTable] = useState<ICell[][]>([]);
  const [nearest, setNearest] = useState<ICell[] | null>(null);

  useEffect(() => {
    const { rows, columns }: FormRequest = storage.getItem(STORAGE_KEYS.FORM_VALUES);
    setTable(createTable(rows, columns));
  }, []);

  const contextValues = useMemo(
    () => ({
      table,
      addRow: () => addRow(setTable),
      removeRow: (index: number) => removeRow(setTable)(index),
      increaseAmount: (rowIndex: number, columnIndex: number) => increaseAmount(setTable)(rowIndex, columnIndex),
      nearest,
      findNearestCells: (cellPosition: ICellPosition) =>
        findNearestCells(table, storage.getItem(STORAGE_KEYS.FORM_VALUES), setNearest)(cellPosition),
      setNearest,
    }),
    [table, nearest]
  );

  return <context.Provider value={contextValues}>{children}</context.Provider>;
};
