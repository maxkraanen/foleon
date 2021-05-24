import React, { Dispatch, SetStateAction } from "react";

import * as S from "./styled/styledPagination";

interface Props {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  totalPageCount,
}) => {
  return (
    <S.Container>
      <S.ButtonWrapper>
        {currentPage > 1 && (
          <S.Button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            PREV
          </S.Button>
        )}
      </S.ButtonWrapper>
      <S.Count>
        {currentPage} / {totalPageCount}
      </S.Count>

      <S.ButtonWrapper>
        {currentPage < totalPageCount && (
          <S.Button
            onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
          >
            NEXT
          </S.Button>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Pagination;
