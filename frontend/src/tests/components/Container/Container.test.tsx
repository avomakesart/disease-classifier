import { render } from '@testing-library/react';
import { Container } from '../../../components';

describe('components/Container', () => {
  test('should render the component with all the props', () => {
    const rendered = render(
      <Container sectionTitle='Dashboard'>
        <p>Children data</p>
      </Container>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component without a title prop', () => {
    const rendered = render(
      <Container>
        <p>Children data</p>
      </Container>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
