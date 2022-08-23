import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import "./Infocard.scss";
import { useState, useEffect} from "react";
import axios from "axios";


export const Infocard = () => {
    // const Infocard= [
    //     {
    //         color: "b-blue",
    //         numb: 110,
    //         title: "Today's Customer",
    //         icon :  <i className="fa fa-users icon"></i>,
    //     },
    //     {
    //         color: "b-red",
    //         numb: 3,
    //         title: "Petrol Pump",
    //         icon :  <i className="fa fa-microchip icon"></i>,
    //     },
    //     {
    //         color: "b-darkblue",
    //         numb: 70,
    //         title: "Total Sales",
    //         icon :  <i className="fa fa-dollar icon"></i>,
    //     },
    //     {
    //         color: "b-green",
    //         numb: 40,
    //         title: "Total Purchase",
    //         icon :  <i className="fa fa-opencart icon"></i>,
    //     },
        
    // ];
const [Infocard, setInfocard]= useState([]);
useEffect(()=>{
    fetchinfocard();
},[])
const fetchinfocard = ()=> {
    axios.get('/api/infoData').then(({data})=>{
        setInfocard(data);
    })
}
    return (
        <div className="pd-section info-section">
            <Container>
                <Row>
                    {Infocard?.map((item, index)=>{
                        return(
                    <Col md={3} key={index}>
                        <div className={"fact-wrap " + item.color}>
                            <div className="fact-content">
                                <div className="content">
                                    <h6 className="numb">{item.numb}</h6>
                                    <h6 className="title">{item.title}</h6>
                                </div>
                                <i className={item.icon}></i>
                               
                            </div>
                            <Link to="" className="viewmore">
                                View More{" "}
                                <i className="fa fa-chevron-right"></i>
                            </Link>
                        </div>
                    </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    );
};
