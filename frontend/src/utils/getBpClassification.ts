export const getBpClassification = (SysBP: number, DiaBP: number) => {
  if (SysBP >= 180 && DiaBP >= 120) {
    return 'Stage 3';
  } else if ((SysBP >= 160 && SysBP < 180) || (DiaBP >= 100 && DiaBP < 110)) {
    return 'Stage 2';
  } else if ((SysBP >= 140 && SysBP < 160) || (DiaBP >= 90 && DiaBP < 100)) {
    return 'Stage 1';
  }

  return 'No Hypertension';
};
