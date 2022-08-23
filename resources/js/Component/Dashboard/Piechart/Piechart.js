import ReactApexChart from "react-apexcharts";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Piechart.scss";
import React,{useEffect,useState} from 'react';
import { Barchart } from "./Barchart";
import axios from "axios";
export const Piechart = () => {
    const [series, setSeries] = useState([80, 90,130,100, 30]);
    
    useEffect (()=>{
      axios.get('/api/piechartData').then(({data})=>{
    
        setSeries(data);
      })
    },[])
    
    const options = {
        labels: ["Expenses","EmployeeSalary","Purchase","Sales" ,"Servicing"],
        colors: ["#E4CE00","#B90016", "#0029BA","#B100CE","#67C587"],
        theme: {
          monochrome: {
            enabled: false
          }
        },
        legend: {
          show: true,
          position: 'bottom',
          fontSize: '12px',
          markers: {
            width: 10,
            height: 10,
            radius: 0,
        },
        horizontalAlign: 'left',
        },
        dataLabels: {
          enabled: false,
        },
        
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%"
              },
              legend: {
                show: true,
                position: 'bottom',
              }
            }
          }
        ],
        
      };

    return (
        <div className="pd-section">
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <div className="report-wrap">
                            <div className="cl-header">
                                <h2 className="title">Expense Report </h2>
                            </div>
                            <div className="chart-wrap same-bg ">
                                <ReactApexChart
                                    options={options}
                                    series={series}
                                    type="pie"
                                    width="330"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} md={6}>
                    <Barchart />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
