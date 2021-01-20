import React from 'react'

const Pagination = ({pageNumber, paginateNext, paginatePrev, total, postPerPage}) => {
    return (
        <div className="paginate">
           {pageNumber > 1 && <button onClick={()=>paginatePrev()} > Previous Page</button>} 
            {pageNumber < Math.ceil(total/postPerPage) && <button onClick={()=>paginateNext()} > Next Page</button>}
        </div>
    )
}
export default Pagination;
