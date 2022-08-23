import ReactApexChart from "react-apexcharts";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./Charts.scss";
export const Charts = () => {
    const series = [
        {
            name: "Petrol",
            data: [2, 5, 10, 15, 50, 40, 44, 5, 29, 35, 56, 67],
        },
        {
            name: "Deisel",
            data: [1, 8, 12, 0, 40, 0, 22, 45, 5, 23, 17, 3],
        },
        {
            name: "Kerosene",
            data: [1, 8, 70, 38, 28, 24, 22, 45, 29, 23, 12, 30],
        },
    ];
    const options = {
        colors: ["#EA044E", "#1F51FF", "#0ACE2A"],
        chart: {
            height: 300,
            type: "bar",
            toolbar: {
                show: true,
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top", // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {},
            offsetY: -10,
            style: {
                fontSize: "12px",
                colors: ["#EA044E"],
            },
        },

        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            position: "bottom",
            axisBorder: {
                show: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function (val) {
                    return val + "k";
                },
            },
        },

        legend: {
            position: "top",
            fontSize: "10px",
            markers: {
                width: 5,
                height: 5,
            },
        },
        title: {
            floating: true,
            offsetY: 331,
            align: "center",
            position: "top",
            style: {
                color: "#444",
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "round",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },
    };
    return (
        <div className="pd-section">
            <Container>
                <Row>
                    <Col lg={9} md={8}>
                        <div className="report-wrap">
                            <div className="cl-header">
                                <h2 className="title">Sales Report </h2>
                            </div>
                            <div className="chart-wrap same-bg">
                                <ReactApexChart
                                    series={series}
                                    options={options}
                                    type="line"
                                    height={300}
                                    className=""
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className="report-wrap overview">
                            <div className="cl-header">
                                <h2 className="title">Today Overview </h2>
                            </div>
                            <div className="same-bg">
                                <ul>
                                    <li className="item">
                                        <strong>Total Sales:</strong>
                                        <span>$ 300</span>
                                    </li>
                                    <li className="item">
                                        <strong>Total Purchase:</strong>
                                        <span>$250</span>
                                    </li>
                                    <li className="item">
                                        <strong>Total Expenses:</strong>
                                        <span>$50</span>
                                    </li>
                                    <li className="item">
                                        <strong>Latest Sales:</strong>
                                        <span>$20</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
