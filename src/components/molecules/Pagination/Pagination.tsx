import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <styled.Pagination>
      <Button onClick={goToPreviousPage} disabled={currentPage === 1} variant="primary">
        {t('PREV_PAGE')}
      </Button>
      <span className="pagination__info">{t('PAGE_INFO', { currentPage, totalPages })}</span>
      <Button onClick={goToNextPage} disabled={currentPage === totalPages} variant="primary">
        {t('NEXT_PAGE')}
      </Button>
    </styled.Pagination>
  );
};
