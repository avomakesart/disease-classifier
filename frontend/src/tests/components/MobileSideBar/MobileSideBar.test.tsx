import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { MobileSideBar } from '../../../components';

describe('components/MobileSideBar', () => {
  test('should render the MobileSideBar correctly with its open prop', () => {
    const rendered = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <MobileSideBar isOpen />
      </MemoryRouter>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the MobileSideBar correctly with the open prop on false', () => {
    const rendered = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <MobileSideBar isOpen={false} />
      </MemoryRouter>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
