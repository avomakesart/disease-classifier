import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SideBar } from '../../../components';

describe('components/SideBar', () => {
  test('should render the SideBar correctly with a default pathname', () => {
    const rendered = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <SideBar />
      </MemoryRouter>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
