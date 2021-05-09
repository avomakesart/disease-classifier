import { render } from '@testing-library/react';
import { Table } from '../../../components';

describe('components/Table', () => {
  const props = {
    tableData: [
      { sysBp: 120, diaBp: 90, atDate: '2018/10/31' },
      { sysBp: 115, diaBp: 100, atDate: '2018/10/20' },
      { sysBp: 115, diaBp: 80, atDate: '2018/10/20' },
    ],
    colHeaders: ['Header 1', 'Header 2', 'Header 3'],
  } as any;

  test('should render the table component with all the props', () => {
    const rendered = render(<Table {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
