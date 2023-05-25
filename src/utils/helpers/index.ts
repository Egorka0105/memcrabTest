export const checkInputConditions = (value: string): number => {
  const valueToNumber = !value ? 0 : +value;
  if (valueToNumber > 100) return 100;
  if (valueToNumber < 0) return 0;
  return valueToNumber;
};
