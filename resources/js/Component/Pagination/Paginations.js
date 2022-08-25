import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";

const items = [...Array(33).keys()];

function Items({ currentItems }) {
  // console.log(currentItems);
  var total=0
    return (
        <div className="items">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Invoice No.</th>
                        <th>Sale By</th>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Total Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems && currentItems?.map((item, index) => {
                        total += parseFloat(item.t_amount);
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.invoice}</td>
                                <td>{item.sale_by}</td>
                                <td>{item.customer_name}</td>
                                <td>{item.product}</td>
                                <td>{item.quantity}</td>
                                <td>{item.date}</td>
                                <td>{item.t_amount}</td>
                                <td></td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <strong>Total Rs: {total}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))} */}
        </div>
    );
}
export const Paginations = ({ itemsPerPage = 4 }) => {
  const[tablelist, setTablelist]=useState([]);
    var total = 0;
     useEffect(()=>{
        fetchtablelist();
    },[]) 

   const fetchtablelist = () =>{
       axios.get('/api/tablelist').then(({data})=>{
        setTablelist(data);
        // console.log(data);
       })
    }
    
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(tablelist.slice(itemOffset, endOffset));
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(tablelist.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(tablelist.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,tablelist]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
};
