import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Row, Modal } from 'react-bootstrap';
import Filter from '../../utility/filters.js';
import ChartConstants from '../../utility/constants/ChartConstants.js';
import DisplayLogs from "../DisplayLogs.jsx";

const LogsBar = ({ logs, type }) => {
    const [index, setIndex] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [filteredLogs, setFilteredLogs] = useState([])
    const [chartLabels, setchartLabels] = useState([]);
    const filterData = (data) => {
        let chartValuesArr = [];
        let filteredLogsArr = []
        let labelsArr = []
        for (const period in ChartConstants.TIME_PERIODS) {
            const value = ChartConstants.TIME_PERIODS[period].VALUE;
            const filteredData = Filter.lastNDaysData(data, ChartConstants.START_TIME, value)
            filteredLogsArr.push(filteredData);
            chartValuesArr.push(filteredData.length);
            labelsArr.push(ChartConstants.TIME_PERIODS[period].LABEL);
        }
        return { chartValuesArr, filteredLogsArr, labelsArr }
    }

    const setChartData = async (logs) => {
        const filterObj = await filterData(logs);
        await setFilteredLogs(filterObj.filteredLogsArr)
        await setchartLabels(filterObj.labelsArr)
        renderChart(filterObj);
    }
    useEffect(() => {
        if(logs.length)
            setChartData(logs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logs]);

    const renderChart = (filterObj) => {
        const ctx = document.getElementById(type);
        const chartTitle = `${type} logs`
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: filterObj.labelsArr,
                datasets: [{
                    data: filterObj.chartValuesArr,
                    backgroundColor: [ChartConstants.LIGHT_ORANGE, ChartConstants.LIGHT_PINK, ChartConstants.SEA_BLUE,],
                    borderColor: [ChartConstants.DARK_ORANGE, ChartConstants.DARK_PINK, ChartConstants.DARK_SEA_BLUE,],
                    borderWidth: 1,
                    maxBarThickness: 50
                }]
            }, options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: chartTitle,
                        padding: {
                            top: 10,
                            bottom: 10
                        },
                        font: {
                            size: 24,
                            style: 'normal'
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        setIndex(index)
                        setShow(true)
                    }
                }, scales: {
                    x: {
                        beginAtZero: true, grid: {
                            display: false
                        }
                    }
                },
            }
        });
    };

    return (<Row>
        <canvas id={type} width="400" height="200"></canvas>
        <Modal size="xl"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{chartLabels[index]} {type} logs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DisplayLogs data={filteredLogs[index]} type={type} />
            </Modal.Body>
        </Modal>
    </Row>);
};

export default LogsBar;