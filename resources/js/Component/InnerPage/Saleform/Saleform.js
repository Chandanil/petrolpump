import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Saleform.scss";
export const Saleform = () => {
    return (
        <div className="pd-section productSelect-wrap">
            <Container >
                <div className="cl-header">
                    <h2 className="title">Select Product</h2>
                </div>
                <form>
                    <div className="select-btn">
                        <ul>
                            <li>
                                <h6 className="title">Petrol</h6>
                                <span>Rs.182/ltr</span>
                            </li>
                            <li>
                                <h6 className="title">Diesel </h6>
                                <span>Rs.170/ltr</span>
                            </li>
                            <li>
                                <h6 className="title">Kerosene</h6>
                                <span>Rs.170/ltr</span>
                            </li>
                        </ul>
                    </div>
                    <Row>
                        <Col md={6}>
                            <div className="form-group d-flex">
                                <label>Invoice No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="E.g 1001"
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group d-flex">
                                <label>Customer Name</label>
                                <input type="text" className="form-control" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group d-flex">
                                <label>Quntity In ltr</label>
                                <input type="text" className="form-control" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group d-flex">
                                <label>Amount</label>
                                <input type="text" className="form-control" />
                            </div>
                        </Col>
                    </Row>
                    <div className="cl-table">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        Product
                                        <span className="required">*</span>
                                    </th>
                                    <th>
                                        Quantity
                                        <span className="required">*</span>
                                    </th>
                                    <th>
                                        Rate
                                        <span className="required">*</span>
                                    </th>{" "}
                                    <th>
                                        Total
                                        <span className="required">*</span>
                                    </th>
                                    <th>
                                        Action
                                        <span className="required">*</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>---</td>
                                    <td>---</td>
                                    <td>---</td>
                                    <td>---</td>
                                    <td>
                                        <i className="fa fa-times-circle icon"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total">
                        <Row>
                            <Col lg={{ span: 4, offset: 6 }}>
                                <div className="form-group d-flex">
                                    <label>Total Amount:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group d-flex">
                                    <label>Payment Type:</label>
                                    <select className="form-control">
                                        <option>Select option</option>
                                        <option>Cash in Hand</option>
                                        <option>Bank Transfer</option>
                                        <option>Office Token </option>
                                        <option>Credit </option>
                                    </select>
                                </div>
                                <div className="form-group d-flex">
                                    <label>Paid Amount:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group d-flex">
                                    <label></label>
                                    <button className="cl-btn ">
                                        Submit
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </form>
            </Container>
        </div>
    );
};
