import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SideBarLayout } from '../../../components';

describe('components/SideBarLayout', () => {
  test('should render the SideBarLayout with all the props', () => {
    const rendered = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <SideBarLayout sectionTitle='Dashboard'>
          <p>Children content</p>
        </SideBarLayout>
      </MemoryRouter>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the SideBarLayout without the title prop', () => {
    const rendered = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <SideBarLayout>
          <p>Children content</p>
        </SideBarLayout>
      </MemoryRouter>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
