import React, { useMemo, useState, useEffect } from "react";
import { AllTable } from "../../Table/AllTable";
import axios from "axios";


export const Customerlist = () => {
    const [tablelists, setTablelist] = useState([]);
    const [tabledata, setTableData] = useState([]);
    
    useEffect(() => {
        axios.get("/api/customerlist").then(({ data }) => {
            setTablelist(data);
            setTableData(data);
        });
    }, []);
    console.log(tablelists , 'hic ')
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
    return (
        <>
       <div >
        {tablelists && 
       <AllTable columns={columns} data={tablelists} searchdata={searchdata}/>
    }
       </div>
        </>
    );
};