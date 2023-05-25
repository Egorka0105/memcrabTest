import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { context } from 'context';
import { checkInputConditions, FIELD_NAMES, FormRequest, INITIAL_FORM_VALUES } from 'utils';

export const Form: FC = () => {
  const [formValues, setFormValues] = useState<FormRequest>(INITIAL_FORM_VALUES);
  const {
    contextForm: { setContextFormValues },
  } = useContext(context);

  const handleChange =
    (fieldName: string) =>
    (event: ChangeEvent<HTMLInputElement>): void => {
      const newValue = checkInputConditions(event.target.value);
      setFormValues((prevValues) => ({
        ...prevValues,
        [fieldName]: newValue,
      }));
    };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setContextFormValues(formValues);
    setFormValues(INITIAL_FORM_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={FIELD_NAMES.COLUMNS}>
        Enter the columns
        <input
          type="number"
          id={FIELD_NAMES.COLUMNS}
          name={FIELD_NAMES.COLUMNS}
          onChange={handleChange(FIELD_NAMES.COLUMNS)}
          value={formValues.columns}
          required
        />
      </label>

      <label htmlFor={FIELD_NAMES.ROWS}>
        Enter the columns
        <input
          type="number"
          id={FIELD_NAMES.ROWS}
          name={FIELD_NAMES.ROWS}
          onChange={handleChange(FIELD_NAMES.ROWS)}
          value={formValues.rows}
          required
        />
      </label>

      <label htmlFor={FIELD_NAMES.CELLS}>
        Enter the columns
        <input
          type="number"
          id={FIELD_NAMES.CELLS}
          name={FIELD_NAMES.CELLS}
          onChange={handleChange(FIELD_NAMES.CELLS)}
          value={formValues.cells}
          required
        />
      </label>
      <button type="submit">Create Matrix</button>
    </form>
  );
};
