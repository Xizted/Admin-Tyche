import ReactPaginate from 'react-paginate';

// ** Custom Pagination
const CustomPagination = ({ currentPage, handlePagination, data }: any) => (
  <ReactPaginate
    previousLabel=''
    nextLabel=''
    forcePage={currentPage}
    onPageChange={(page) => handlePagination(page)}
    pageCount={Math.ceil(data.length / 7) || 1}
    breakLabel='...'
    pageRangeDisplayed={2}
    marginPagesDisplayed={2}
    activeClassName='active'
    pageClassName='page-item'
    breakClassName='page-item'
    nextLinkClassName='page-link'
    pageLinkClassName='page-link'
    breakLinkClassName='page-link'
    previousLinkClassName='page-link'
    nextClassName='page-item next-item'
    previousClassName='page-item prev-item'
    containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
  />
);

export default CustomPagination;
