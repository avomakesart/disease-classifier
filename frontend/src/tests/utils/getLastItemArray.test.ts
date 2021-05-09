import { getLastItemArray } from '../../utils';

describe('utils/getLastItemArray', () => {
  const props = [
    { sysBp: 120, diaBp: 90, atDate: '2018/10/31' },
    { sysBp: 115, diaBp: 100, atDate: '2018/10/20' },
    { sysBp: 115, diaBp: 80, atDate: '2018/10/20' },
  ];
  test('should return the last item from an array', () => {
    const lastItem = getLastItemArray(props);
    expect(lastItem).toEqual({ sysBp: 115, diaBp: 80, atDate: '2018/10/20' });
  });
});
