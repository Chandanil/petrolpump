import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Tablelist} from "../../Table/Tablelist";
    import React, { useMemo, useState, useEffect } from "react";
import { AllTable } from "../../Table/AllTable";
import axios from "axios";


export const Managesale = () => {  
    const[tablelists, setTablelist]=useState([]);
    // useEffect(()=>{
    //     fetchtablelist();
    // },[]) 
    // const fetchtablelist = () =>{
    //     axios.get('/api/tablelist').then(({data})=>{
    //      setTablelist(data);
    //      console.log(data);
    //     })
    //  }
     useEffect(()=>{
         axios.get('/api/tablelist').then(({data})=>{
          setTablelist(data)
               
               })
              
       },[])
 
     console.log(tablelists,"RGRG")
//   const [data, setData] = useState([]);

const columns =  useMemo(
    () => [

        {
            Header: "customer Name",
            accessor: "customer_name"
      
          },
          {
            Header: "Product",
            accessor: "product"
      
          },
          

    ]
)

         
     


       
      // Custom component to render Genres 

  // Loop through the array and create a badge-like component instead of a comma-separated string
    
    return (
        <div className="pd-section managesale-section">
            <Container>
            <form >
                <Row>
                    <Col sm={6} md={3}>
                        <div className="form-group d-flex">
                            <label>Start Date:</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="form-group d-flex">
                            <label>End Date:</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                    </Col>
                    <Col sm={6} md={{span:3, offest: 3}}>
                        <button className="cl-btn">Search</button>
                    </Col>
                </Row>
                <div className="cl-header">
                    <h2 className="title">Manage Sale</h2>
                </div>
              {/* <Tablelist /> */}
              <AllTable  columns={columns}  data={tablelists}/>
            </form>
            </Container>
        </div>
    )

}