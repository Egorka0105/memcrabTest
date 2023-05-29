import {
  createContext,
  Dispatch,
  FC,
  memo,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { STORAGE_KEYS } from 'utils/constants';
import { addRow, createTable, findNearestCells, increaseAmount, removeRow, storage } from 'utils/helpers';
import { FormRequest, ICell, ICellPosition } from 'utils/types';

interface TableProviderProps {
  children: ReactNode;
}

interface TableContextType {
  table: ICell[][];
  addRow: () => void;
  removeRow: (index: number) => void;
  increaseAmount: (rowIndex: number, columnIndex: number) => void;
  nearest: ICell[] | null;
  findNearestCells: (cellPosition: any) => any;
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

export const TableProvider: FC<TableProviderProps> = memo(({ children }) => {
  const [table, setTable] = useState<ICell[][]>([]);
  const [nearest, setNearest] = useState<ICell[] | null>(null);

  useEffect(() => {
    const { rows, columns }: FormRequest = storage.getItem(STORAGE_KEYS.FORM_VALUES);
    setTable(createTable(rows, columns));
  }, []);

  const findNearestCellsHandler = useCallback(
    (cellPosition: ICellPosition) =>
      findNearestCells(table, storage.getItem(STORAGE_KEYS.FORM_VALUES), setNearest)(cellPosition),
    [table, nearest]
  );
  const contextValues = useMemo(
    () => ({
      table,
      addRow: () => addRow(setTable),
      removeRow: (index: number) => removeRow(setTable)(index),
      increaseAmount: (rowIndex: number, columnIndex: number) => increaseAmount(setTable)(rowIndex, columnIndex),
      nearest,
      findNearestCells: findNearestCellsHandler,
      setNearest,
    }),
    [table, nearest, addRow, removeRow, increaseAmount, findNearestCells, setNearest]
  );

  return <context.Provider value={contextValues}>{children}</context.Provider>;
});
