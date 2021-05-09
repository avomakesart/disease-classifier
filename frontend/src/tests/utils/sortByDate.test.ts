import { sortByDate } from '../../utils';

describe('utils/sortByDate', () => {
  test('should sort the data by date', () => {
    const data = [
      { eGFR: 65, atDate: '2018/10/31' },
      { eGFR: 70, atDate: '2018/10/20' },
      { eGFR: 70, atDate: '2020/10/20' },
    ];

    const result = sortByDate(data);
    expect(result).toEqual([
      { eGFR: 70, atDate: '2020/10/20' },
      { eGFR: 65, atDate: '2018/10/31' },
      { eGFR: 70, atDate: '2018/10/20' },
    ]);
  });
});
