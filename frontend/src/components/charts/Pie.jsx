import {Col, Row} from "react-bootstrap";
import {useEffect, useRef} from "react";
import Chart from 'chart.js/auto';
import ChartConstants from "../../utility/constants/ChartConstants.js";
import Form from "react-bootstrap/Form";


const Pie = ({data,legends, title,label,menuChangeCallback,menuList}) => {
    const canvasRef = useRef(null);
    const pieChart = useRef(null);
    useEffect(() => {
        if (data)
            renderChart();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    const renderChart = () => {
        const chartData = {
            labels: legends,
            datasets: [
                {
                    label: label,
                    data: data,
                    backgroundColor: [
                        ChartConstants.LIGHT_ORANGE,
                        ChartConstants.LIGHT_PINK,
                        ChartConstants.SEA_BLUE,
                        ChartConstants.LIGHT_RED,
                        ChartConstants.LIGHT_GREEN,
                        ChartConstants.LIGHT_YELLOW
                    ],
                    hoverBackgroundColor: [
                        ChartConstants.DARK_ORANGE,
                        ChartConstants.DARK_PINK,
                        ChartConstants.DARK_SEA_BLUE,
                        ChartConstants.DARK_RED,
                        ChartConstants.DARK_GREEN,
                        ChartConstants.DARK_YELLOW
                    ],
                },
            ],
        }
        const options = {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: title,
                    padding: {
                        top: 10,
                        bottom: 10
                    },
                    font: {
                        size: 24,
                        style: 'normal'
                    }
                },
            }
        };
        if (pieChart.current) {
            pieChart.current.destroy();
        }
        pieChart.current = new Chart(canvasRef.current.getContext('2d'), {
            type: 'pie',
            data: chartData,
            options: options
        });
    }
    const menuChange = (event) => {
        if (pieChart.current) {
            pieChart.current.destroy();
        }
        menuChangeCallback(event.target.value)
    }

    return (<Row>
        <Row>
            <Col md='6'>

                {
                    menuList && menuList.length &&
                    <Form.Select aria-label="Default select example" size="sm" onChange={menuChange}>
                        {menuList.map((menu) => (
                            <option key={menu.LABEL} value={menu.VALUE}>{menu.LABEL}</option>)
                        )}
                    </Form.Select>
                }

            </Col>
        </Row>
        <canvas ref={canvasRef} width="400" height="200"></canvas>
    </Row>);
};

export default Pie;