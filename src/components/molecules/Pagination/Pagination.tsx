import React from 'react';

import { Button } from '../../atoms/Button';
import styled from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
}) => {
  return (
    <styled.Pagination>
      <Button onClick={goToPreviousPage} disabled={currentPage === 1} variant="primary">
        Prev
      </Button>
      <span className="pagination__info">
        Page {currentPage} of {totalPages}
      </span>
      <Button onClick={goToNextPage} disabled={currentPage === totalPages} variant="primary">
        Next
      </Button>
    </styled.Pagination>
  );
};
