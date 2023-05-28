import { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { createTable, FormRequest, ICell, storage, STORAGE_KEYS } from 'utils';
import { addRow } from 'utils/helpers/addRow';
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
}

export const context = createContext<TableContextType>({
  table: [],
  addRow: () => {},
  removeRow: (index) => {},
  increaseAmount: (rowIndex, columnIndex) => {},
});

export const TableProvider: FC<TableProviderProps> = ({ children }) => {
  const [table, setTable] = useState<ICell[][]>([]);

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
    }),
    [table]
  );

  return <context.Provider value={contextValues}>{children}</context.Provider>;
};
