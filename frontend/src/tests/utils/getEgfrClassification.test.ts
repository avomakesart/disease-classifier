import { getEgfrClassification } from '../../utils';

describe('utils/getEgfrClassification', () => {
  const props = [{ eGFR: 65 }, { eGFR: 50 }, { eGFR: 70 }];
  const data = props.map((e) => e.eGFR) as any;

  test('should return the classification for EgFr data', () => {
    const classified = getEgfrClassification(data);
    expect(classified).toEqual('Kidney Failure');
  });
});
