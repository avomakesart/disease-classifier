import { sortByDate } from './sortByDate';

export const getDropReadings = (array: any) => {
  const arrayInfo = [...array];
  const sortedArray = sortByDate(arrayInfo);
  const readingDrops = [];

  for (let i = 0; i + 1 < sortedArray.length; i++) {
    let eGFR1 = parseInt(sortedArray[i].eGFR);
    let eGFR2 = parseInt(sortedArray[i + 1].eGFR);
    if (eGFR1 > eGFR2) {
      let percentage = (eGFR1 - eGFR2) / eGFR1;
      if (percentage >= 0.2) {
        const readings = {
          firstReading: sortedArray[i],
          secondReading: sortedArray[i + 1],
          percentage: `${(percentage * 100).toFixed(2)} %`,
        };
        readingDrops.push(readings);
      }
    }
  }

  return readingDrops;
};
