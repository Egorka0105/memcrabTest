import { FC, ReactNode, useMemo, useState } from 'react';
import { context } from 'context';
import { FormRequest, INITIAL_FORM_VALUES } from 'utils';

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [contextFormValues, setContextFormValues] = useState<FormRequest>(INITIAL_FORM_VALUES);

  const contextValue = useMemo(
    () => ({
      contextForm: {
        contextFormValues,
        setContextFormValues,
      },
    }),
    [contextFormValues]
  );

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};
