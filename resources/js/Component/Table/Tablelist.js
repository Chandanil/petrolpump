import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ReactCSV } from "../DownloadDoc/ReactCSV";
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
        </div>
    );
}
export const Tablelist = ({ itemsPerPage = 4}) => {
    const[tablelist, setTablelist]=useState([]);
    var total = 0;
     useEffect(()=>{
        fetchtablelist();
    },[]) 

   const fetchtablelist = () =>{
       axios.get('/api/tablelist').then(({data})=>{
        setTablelist(data);
        console.log(data);
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
        <div className="cl-table same-bg table-list">
            <form>
                <div className="d-flex search-content">
                    <div className="select form-group d-flex">
                        <span>Show</span>
                        <select>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                        </select>
                        <span>Entries</span>
                    </div>
                    <div className="form-group d-flex search">
                        <label>Search:</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                        />
                    </div>
                    <ul className="download-doc form-group">
                        <li className="item"><ReactCSV name="CSV"/></li>
                        <li className="item">PDF</li>
                        <li className="item">Copy</li>
                        <li className="item">Print</li>
                    </ul>
                </div>
            </form>
            <div className="items">
                <Items currentItems={currentItems} />
                <div className="pagination-wrap d-flex">
                    <div className="r_show">
                        <strong className="shows">Showing 1 to 7 of 1000 Entries</strong>
                    </div>
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
                        containerClassName="pagination cl-pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    );
}
