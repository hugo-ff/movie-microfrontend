import { render, screen } from '../../../../tests/test-utils';
import Spinner from '../Spinner';

describe('Spinner', () => {
  it('should render without errors', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should have the "Loading..." text', () => {
    render(<Spinner />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
