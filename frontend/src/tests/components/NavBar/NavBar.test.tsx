import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../../components';

describe('components/NavBar', () => {
  test('should render the NavBar correctly in the base url', () => {
    const rendered = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <NavBar />
      </MemoryRouter>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
