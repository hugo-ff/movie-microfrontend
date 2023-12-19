import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../../tests/test-utils';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('should render without errors and handles button clicks', async () => {
    const mockGoToNextPage = jest.fn();
    const mockGoToPreviousPage = jest.fn();

    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        goToNextPage={mockGoToNextPage}
        goToPreviousPage={mockGoToPreviousPage}
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    const prevButton = screen.getByRole('button', { name: /prev/i });
    await userEvent.click(nextButton);
    expect(mockGoToNextPage).toHaveBeenCalled();

    await userEvent.click(prevButton);
    expect(mockGoToPreviousPage).toHaveBeenCalled();
  });
});
