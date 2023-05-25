import { createContext } from 'react';
import { FormRequest, INITIAL_FORM_VALUES } from 'utils';

export const context = createContext({
  contextForm: {
    contextFormValues: INITIAL_FORM_VALUES,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setContextFormValues: (values: FormRequest) => {},
  },
});
