export const getEgfrClassification = (eGFR: number) => {
  if (eGFR >= 90) {
    return 'Normal';
  } else if (eGFR >= 60 && eGFR <= 89) {
    return 'Mildly Decreased';
  } else if (eGFR >= 45 && eGFR <= 59) {
    return 'Mild to Moderate';
  } else if (eGFR >= 30 && eGFR <= 44) {
    return 'Moderate to Severe';
  } else if (eGFR >= 15 && eGFR <= 29) {
    return 'Severely Decreased';
  }

  return 'Kidney Failure';
};
