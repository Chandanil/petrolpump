import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import "./Table.scss";
import axios from "axios";
import { useEffect,useState } from "react";

export const Table = () => {
const [table_data, setTableData] = useState([]);
var total = 0;
    useEffect(()=>{
        fetchcustomerdetail();
        
    },[])

    const fetchcustomerdetail = () =>{
        axios.get('/api/customers').then(({data})=>{
            setTableData(data);
        })
    }
    
    return (
        <div className="pd-section">
            <Container>
                <div className="cl-header">
                    <h2 className="title">Sales and Purchase Report </h2>
                </div>
                <div className="same-bg cl-table ">
                <Link to="" className="cl-btn btn"> See all </Link>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>Invoice No.</th>
                                <th>Customer Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                                <th>Payment Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table_data?.map ((item, index)=>{
                                 total += parseFloat(item.t_amount);
                                // total = [...total, item.t_amount];
                                return(
                               
                                    <tr key={index}>
                                    <td>{index+ 1}</td>
                                    <td>{item.invoice}</td>
                                    <td>{item.name}</td>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.t_amount}</td>
                                    <td>{item.payment_type}</td>
                                </tr>
                                )
                            })}
                            
                            <tr >
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                               
                                      <td>Total: Rs.{total}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};
