import { getDropReadings } from '../../utils';

describe('utils/getDropReadings', () => {
  const props = [
    { eGFR: 65, atDate: '2018/10/31' },
    { eGFR: 50, atDate: '2018/10/31' },
  ];

  const expected = [
    {
      firstReading: { eGFR: 65, atDate: '2018/10/31' },
      secondReading: { eGFR: 50, atDate: '2018/10/31' },
      percentage: '23.08 %',
    },
  ];

  test('should return the two consecutive readings percentage', () => {
    const dropReading = getDropReadings(props);
    expect(dropReading).toEqual(expected);
  });
});
