import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { checkInputConditions, FIELD_NAMES, ROUTES, storage, STORAGE_KEYS } from 'utils';
import styles from './index.module.scss';

interface InitialValues {
  [key: string]: string | number;
}

const initialValues: InitialValues = {
  rows: '', // m
  columns: '', // n
  cells: '', // x
};

export const Form: FC = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (fieldName: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = checkInputConditions(event.target.value);
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    storage.setItem(STORAGE_KEYS.FORM_VALUES, formValues);
    setFormValues(initialValues);
    navigate(ROUTES.TABLE);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={FIELD_NAMES.ROWS}>
        Enter the rows like: M
        <input
          type="number"
          id={FIELD_NAMES.ROWS}
          name={FIELD_NAMES.ROWS}
          onChange={handleChange(FIELD_NAMES.ROWS)}
          value={formValues[FIELD_NAMES.ROWS]}
          required
        />
      </label>

      <label htmlFor={FIELD_NAMES.COLUMNS}>
        Enter the columns like: N
        <input
          type="number"
          id={FIELD_NAMES.COLUMNS}
          name={FIELD_NAMES.COLUMNS}
          onChange={handleChange(FIELD_NAMES.COLUMNS)}
          value={formValues[FIELD_NAMES.COLUMNS]}
          required
        />
      </label>

      <label htmlFor={FIELD_NAMES.CELLS}>
        Enter the cells like: X
        <input
          type="number"
          id={FIELD_NAMES.CELLS}
          name={FIELD_NAMES.CELLS}
          onChange={handleChange(FIELD_NAMES.CELLS)}
          value={formValues[FIELD_NAMES.CELLS]}
          required
        />
      </label>
      <button className={styles.submit} type="submit">
        Create Matrix
      </button>
    </form>
  );
};
