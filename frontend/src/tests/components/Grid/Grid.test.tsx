import { render } from '@testing-library/react';
import { Grid } from '../../../components';

describe('components/Grid', () => {
  test('should render the component with all the props', () => {
    const rendered = render(
      <Grid cols='3' mobileCols='2'>
        <p>Children data</p>
      </Grid>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component without the cols prop', () => {
    const rendered = render(
      <Grid mobileCols='2'>
        <p>Children data</p>
      </Grid>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });

  test('should render the component without the mobileCols prop', () => {
    const rendered = render(
      <Grid cols='3'>
        <p>Children data</p>
      </Grid>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
  
});
