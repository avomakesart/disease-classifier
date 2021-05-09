import { render } from '@testing-library/react';
import { Error } from '../../../components';

describe('components/Error', () => {
  test('should render the component with all the props', () => {
    const rendered = render(
      <Error errorType='500' description='Sorry something went wrong' />
    );
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
