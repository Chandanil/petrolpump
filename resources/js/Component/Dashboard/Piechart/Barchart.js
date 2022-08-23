import ReactApexChart from "react-apexcharts";
import "./Piechart.scss";

export const Barchart = () => {
    const bar_series = [
        {
            name: "Sales",
            data: [70, 74, 10, 15, 50, 40, 44, 5, 29, 35, 56, 67],
        },
        {
            name: "Purchase",
            data: [143, 103, 12, 0, 40, 0, 22, 45, 5, 23, 17, 3],
        },
    ];
    const bar_options = {
        colors: ["#1F51FF", "#0ACE2A"],
        chart: {
            height: 260,
            type: "bar",
            toolbar: {
                show: true,
            },
            toolbar: {
                show:false,
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
            position: "bottom",
            fontSize: "10px",
            markers: {
                width: 10,
                height: 10,
                radius: 0,
            },
              horizontalAlign: 'left',
        },
        title: {
            floating: true,
            offsetY: 331,
            align: "left",
            position: "bottom",
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
        <div className="report-wrap">
                            <div className="cl-header">
                                <h2 className="title">Sales and Purchase Report </h2>
                            </div>
                            <div className="chart-wrap same-bg">
                                <ReactApexChart
                                    series={ bar_series }
                                    options={bar_options }
                                    type="bar"
                                    height={230}
                                    className=""
                                />
                            </div>
                        </div>
    );
};
