import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Row, Col, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import DisplayLogs from "../DisplayLogs.jsx";

const Bar = ({ chartData, chartTitle, labels, datasets, legendDisplay,
    menuList, clickCallback, closeModalCallback, menuChangeCallback, modalcomponent }) => {
    const [myChart, setMyChart] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalData, setModalData] = useState({});
    const ModalComponent = modalcomponent;
    useEffect(() => {
        // console.log("chartData", myChart, chartData, chartTitle, labels, datasets)
        if (chartData && chartData.length) {
            if (myChart) {
                setMyChart(null);
                myChart.destroy();
            }
            renderChart(chartData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartData]);

    const renderChart = () => {
        const ctx = document.getElementById(chartTitle);
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets,
            }, options: {
                plugins: {
                    legend: {
                        display: legendDisplay ? legendDisplay : false
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
                        setModalTitle(labels[index])
                        setModalData(clickCallback(labels[index]));
                        setShowModal(true);
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
        setMyChart(chart);
    };

    const handleClose = (e) => {
        setShowModal(false);
        closeModalCallback && closeModalCallback(e);
    }
    const menuChange = (event) => {
        if (myChart) {
            myChart.destroy();
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
        {chartTitle && <canvas id={chartTitle} width="400" height="200"></canvas>}
        {showModal && modalcomponent && <Modal size="xl"
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalComponent level={modalData} collapsed={1}></ModalComponent>
            </Modal.Body>
        </Modal>}
    </Row>);
};

export default Bar;