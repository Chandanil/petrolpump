import axios from "axios";
import React, { useEffect, useState } from "react";
import {Paginations} from "../Pagination/Paginations";

export const Tablelist = () => {
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
                        <li className="item">CSV</li>
                        <li className="item">PDF</li>
                        <li className="item">Copy</li>
                        <li className="item">Print</li>
                    </ul>
                </div>
            </form>
            {/* <table className="table">
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
                    {tablelist?.map((item,index) => { 
                        total += parseFloat(item.t_amount);
                        return(
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
                                    )
                                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>Total Rs: {total}</strong></td>
                    </tr>
                </tbody>
            </table> */}
            <Paginations />
        </div>
    );
}
