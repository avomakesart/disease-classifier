import { getBpClassification } from '../../utils';

describe('utils/getBpClassification', () => {
  const props = { sysBp: 115, diaBp: 80 };

  test('should return the classification data depending on the passed values', () => {
    const classified = getBpClassification(props.sysBp, props.diaBp);
    expect(classified).toEqual('No Hypertension');
  });
});
