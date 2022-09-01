import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Tablelist } from "../../Table/Tablelist";
import React, { useMemo, useState, useEffect } from "react";
import { AllTable } from "../../Table/AllTable";
import axios from "axios";
// import DatePicker, { ReactDatePicker } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


export const Managesale = () => {
    const [tablelists, setTablelist] = useState([]);
    const [tabledata, setTableData] = useState([]);
    
    useEffect(() => {
        axios.get("/api/tablelist").then(({ data }) => {
            setTablelist(data);
            setTableData(data);
        });
    }, []);
    const searchdata = (e) => {
        const filtered = tabledata.filter((row) => {
            return row.customer_name.includes(e);
        });
        setTablelist(filtered);
       
    };


    const columns = useMemo(() => [
        {
            Header: "S.N",
            accessor: "sn",
        },
        {
            Header: "Invoice  No.",
            accessor: "invoice",
        },
        {
            Header: "Sales By",
            accessor: "sale_by",
        },
        {
            Header: "Customer Name",
            accessor: "customer_name",
        },
        {
            Header: "Product",
            accessor: "product",
        },
        {
            Header: "Quantity",
            accessor: "quantity",
        },
        {
            Header: "Date",
            accessor: "date",
        },
        {
            Header: "Total Amount",
            accessor: "t_amount",
            // Cell:row => {
            //   console.log(data)
            // }
        },
    ]);

    // Custom component to render Genres

    // Loop through the array and create a badge-like component instead of a comma-separated string

    //datepicker 
    // const [startDate, setStartDate] = useState(new Date());


    return (
        <div className="pd-section managesale-section">
            <Container>
                <form>
                    <Row>
                        <Col sm={6} md={3}>
                            <div className="form-group d-flex">
                                <label>Start Date:</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="form-control"
                                />
                                {/* <ReactDatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="form-group d-flex">
                                <label>End Date:</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="form-control"
                                />
                            </div>
                        </Col>
                        <Col sm={6} md={{ span: 3, offest: 3 }}>
                            <button className="cl-btn">Search</button>
                        </Col>
                    </Row>
                    <div className="cl-header">
                        <h2 className="title">Manage Sale</h2>
                    </div>
                    {/* <Tablelist /> */}
                    <AllTable
                        columns={columns}
                        data={tablelists}
                        searchdata={searchdata}
                    />
                </form>
            </Container>
        </div>
    );
};
