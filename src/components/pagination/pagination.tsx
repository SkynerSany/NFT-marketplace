'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import './pagination.scss';
import ReactPaginate from 'react-paginate';
import { IPaginationEvent, IPaginationProps } from './pagination.interfaces';

export default function Pagination({items}: IPaginationProps) {
  const router = useRouter();
  const routerPage = useSearchParams().get('page');
  const currentPage = routerPage ? Number(routerPage) - 1 : 0;
  const [itemOffset, setItemOffset] = useState(currentPage);
  const itemsPerPage = 1;

  useEffect(() => {
    if (currentPage !== itemOffset) {
      setItemOffset(currentPage)
    }
  }, [routerPage]);
  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: IPaginationEvent) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    router.push(`?page=${newOffset + 1}`);
  };

  return (
    <>
      {
        currentItems
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        forcePage={itemOffset}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        containerClassName="pagination__container"
        pageClassName="pagination__page"
        activeClassName="pagination__page_active"
        disabledClassName="pagination__page_disabled"
      />
    </>
  );
}
