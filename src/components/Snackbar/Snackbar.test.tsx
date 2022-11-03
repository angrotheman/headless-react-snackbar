import { render } from '@testing-library/react';

import { SnackbarProvider } from './SnackbarProvider';

describe('Snackbar', () => {
  it('should render a baseElement', () => {
    const { baseElement } = render(<SnackbarProvider />);

    expect(baseElement).toBeTruthy();
  });
});
