interface CalculatePercent {
  <T extends number>(sum: T, amount: T): number;
}

export const calculatePercent: CalculatePercent = (sum, amount) => Math.round((amount / sum) * 100);
