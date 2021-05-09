import { render } from '@testing-library/react';
import { Loader } from '../../../components';

describe('component/Loader', () => {
  test('should render the component correctly', () => {
    const rendered = render(<Loader />);

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
