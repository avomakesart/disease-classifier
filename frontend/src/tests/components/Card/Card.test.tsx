import { render } from '@testing-library/react';
import { Card } from '../../../components';

describe('components/Card', () => {
  test('should render the card component with all the props', () => {
    const rendered = render(
      <Card title='Demo title'>
        <h3>This is just demo data</h3>
      </Card>
    );
    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the card component without the title prop', () => {
    const rendered = render(
      <Card>
        <h3>This is just demo data</h3>
        <p>Card without title</p>
      </Card>
    );
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
