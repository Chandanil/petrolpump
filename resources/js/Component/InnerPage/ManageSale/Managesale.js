import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Tablelist} from "../../Table/Tablelist";
import { PDFfile } from "../../DownloadDoc/PDFfile";
import { PDFViewer } from '@react-pdf/renderer';

export const Managesale = () => {
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
              <Tablelist />
              <PDFViewer >
        <PDFfile />
  </PDFViewer>
            </form>
            </Container>
        </div>
    )
}