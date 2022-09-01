import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Customer.scss";
import { useState } from "react";
export const Addcustomer = () => {
    const [addcustomer, setAddcustmer] = useState ({
        customername: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        city: '',
        mobileno: '',
    }) 
    function inputhandleChange(e) {
        const value = e.target.value;
        setAddcustmer({...addcustomer, [e.target.name]: value
        });
      }
     const  handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value)
        console.log(addcustomer,"chandani")
      }
      return (
        <div className="pd-section addcustomer">
           <Container  >
                <div className="cl-header">
                    <h2 className="title">Add Customer</h2>
                </div>
                <div className="same-bg">
                        <form onSubmit={handleSubmit}>
                       <Row>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>Customer Name: <span className='required'>*</span></label>
                                    <input type={'text'} name="customername" className="form-control" 
                                    value={addcustomer.customername}  onChange={inputhandleChange}/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>Email Address: </label>
                                    <input type={'text'} name="email" className="form-control"
                                     value={addcustomer.email}  onChange={inputhandleChange}/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>Phone:</label>
                                    <input type={'text'} className="form-control" name="phone"
                                     value={addcustomer.phone}  onChange={inputhandleChange} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>Country:</label>
                                    <input type={'text'} className="form-control" name="country"
                                     value={addcustomer.country}  onChange={inputhandleChange} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>Address: <span className='required'>*</span></label>
                                    <input type={'text'} className="form-control" name="address"
                                     value={addcustomer.address}  onChange={inputhandleChange} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>City:</label>
                                    <input type={'text'} className="form-control" name="city"
                                     value={addcustomer.city}  onChange={inputhandleChange} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form-group d-flex">
                                    <label>Mobile No: <span className='required'>*</span></label>
                                    <input type={'text'} className="form-control" name="mobileno"
                                     value={addcustomer.mobileno}  onChange={inputhandleChange} />
                                </div>
                            </Col>
                       </Row>
                          <div className="clearfix">
                          <button type="submit" className="cl-btn float-right">Submit</button>
                          </div>
                    </form>
                </div>
           </Container>
        </div>
      )
}