import { Container, Row, Col } from "react-bootstrap";
import LogsBar from "./charts/LogsBar.jsx";
import Bar from "./charts/Bar.jsx";
import { useEffect, useState } from "react";
import Services from "../Services/api.js";
import UrlEndPoints from "../utility/UrlEndpoints.js";
import ChartConstants from "../utility/constants/ChartConstants.js";
import GameConstants from "../utility/constants/GameConstants.js";
import { useSelector } from "react-redux";
import LevelSession from "./LevelSession.jsx";
import CommonErrors from "./Highlights/CommonErrors.jsx";
const Dashboard = () => {
    const [validLogs, setValidLogs] = useState([]);
    const [invalidLogs, setInvalidLogs] = useState([]);
    const [popularLevels, setPopularLevels] = useState([]);
    const [allPopularLevels, setAllPopularLevels] = useState([]);
    const [longestLevels, setLongestLevels] = useState([]);
    const [allLongestLevels, setAllLongestLevels] = useState([]);
    const [popularLevelsChartDetails, setPopularLevelsChartDetails] = useState({});
    const [longestLevelsChartDetails, setLongestLevelsChartDetails] = useState({});
    const [averageGameSession, setAverageGameSession] = useState([]);
    const [avgGameSessionChartDetails, setAvgGameSessionChartDetails] = useState({});
    const menuList= Object.values(ChartConstants.TIME_PERIODS);
    const logs = useSelector((state) => state.logs.allLogs);
    const timePeriods = Object.values(ChartConstants.TIME_PERIODS).map(t => t.VALUE)
    useEffect(() => {
        if (logs && logs.length) {
            setValidLogs(logs)
        } else {
            Services.getAll(UrlEndPoints.LOGS)
                .then(response => {
                    setValidLogs(response)
                })
        }

        Services.getAll(UrlEndPoints.INVALID_LOGS)
            .then(response => {
                setInvalidLogs(response)
            })
        Services.update(UrlEndPoints.POPULAR_LEVELS, { "days": timePeriods })
            .then(response => {
                const last24Hrs = response[timePeriods[0]];
                setPopularLevels(last24Hrs);
                setAllPopularLevels(response);
                const chartDetails = getChartDetails(last24Hrs, timePeriods[0], ChartConstants.POPULAR_LEVELS, ChartConstants.POPULAR_LEVELS_DATASET_KEY);
                setPopularLevelsChartDetails(chartDetails);
            })
        Services.update(UrlEndPoints.LONGEST_LEVELS, { "days": timePeriods })
            .then(response => {
                const last24Hrs = response[timePeriods[0]];
                setLongestLevels(last24Hrs);
                setAllLongestLevels(response);
                const chartDetails = getChartDetails(last24Hrs, timePeriods[0], ChartConstants.LONGEST_LEVELS, ChartConstants.LONGEST_LEVELS_DATASET_KEY);
                setLongestLevelsChartDetails(chartDetails);
            })
        Services.update(UrlEndPoints.AVERAGE_GAME_SESSION, { "days": timePeriods })
            .then(response => {
                setAverageGameSession(response);
                const chartDetails = {
                    chartTitle: ChartConstants.AVERAGE_GAME_SESSION,
                    labels: Object.values(ChartConstants.TIME_PERIODS).map(t => t.LABEL),
                    datasets: [{
                        data: Object.values(response),
                        backgroundColor: [ChartConstants.LIGHT_ORANGE, ChartConstants.LIGHT_PINK, ChartConstants.SEA_BLUE,],
                        borderColor: [ChartConstants.DARK_ORANGE, ChartConstants.DARK_PINK, ChartConstants.DARK_SEA_BLUE,],
                        borderWidth: 1,
                        maxBarThickness: 50
                    }]
                };
                setAvgGameSessionChartDetails(chartDetails);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const getChartDetails = (dataArr, value, title, datasetKey) => {
        const timePeriod = Object.values(ChartConstants.TIME_PERIODS).find(t => t.VALUE == value)
        return {
            chartTitle: `${title} - ${timePeriod.LABEL}`,
            labels: dataArr.map(l => l.level),
            datasets: [{
                data: dataArr.map(l => l[datasetKey]),
                backgroundColor: [ChartConstants.LIGHT_ORANGE, ChartConstants.LIGHT_PINK, ChartConstants.SEA_BLUE,],
                borderColor: [ChartConstants.DARK_ORANGE, ChartConstants.DARK_PINK, ChartConstants.DARK_SEA_BLUE,],
                borderWidth: 1,
                maxBarThickness: 50
            }]
        };
    }
    const popularLevelsMenuChange = (menu) => {
        const dataArr = allPopularLevels[menu];
        const chartDetails = getChartDetails(dataArr, menu, ChartConstants.POPULAR_LEVELS, ChartConstants.POPULAR_LEVELS_DATASET_KEY);
        setPopularLevelsChartDetails(chartDetails);
        setPopularLevels(dataArr);
    }
    const longestLevelsMenuChange = (menu) => {
        const dataArr = allLongestLevels[menu];
        const chartDetails = getChartDetails(dataArr, menu, ChartConstants.LONGEST_LEVELS, ChartConstants.LONGEST_LEVELS_DATASET_KEY);
        setLongestLevelsChartDetails(chartDetails);
        setLongestLevels(dataArr);
    }
    const findLevel = (arr, key, match) => {
        return arr.find(l => l[key] === match);
    }
    const longestLevelsclickCallback = (value) => {
        return findLevel(longestLevels, GameConstants.LEVEL, value);
    }
    const popularLevelsclickCallback = (selection) => {
        return findLevel(popularLevels, GameConstants.LEVEL, selection);
    }
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
            <Container fluid>
                <Row className="mx-5">
                    <Col md='5' className="chartBox px-4 py-4">
                        <LogsBar logs={validLogs}
                            type="Valid"></LogsBar>
                    </Col>
                    <Col md='5' className="ms-5 chartBox px-4 py-4">
                        <LogsBar logs={invalidLogs}
                            type="Invalid"></LogsBar>
                    </Col>
                </Row>
                <Row className="mx-5 py-5">
                    <Col md='5' className="chartBox px-4 py-4">
                        <Bar chartData={popularLevels}
                            chartTitle={popularLevelsChartDetails.chartTitle}
                            labels={popularLevelsChartDetails.labels}
                            datasets={popularLevelsChartDetails.datasets}
                            menuList={menuList}
                            menuChangeCallback={popularLevelsMenuChange}
                            modalcomponent={LevelSession}
                            clickCallback={popularLevelsclickCallback}
                        ></Bar>
                    </Col>
                    <Col md='5' className="ms-5 chartBox px-4 py-4">
                        <Bar chartData={longestLevels}
                            chartTitle={longestLevelsChartDetails.chartTitle}
                            labels={longestLevelsChartDetails.labels}
                            datasets={longestLevelsChartDetails.datasets}
                            menuList={menuList}
                            menuChangeCallback={longestLevelsMenuChange}
                            modalcomponent={LevelSession}
                            clickCallback={longestLevelsclickCallback}
                        ></Bar>
                    </Col>
                </Row>
                <Row className="mx-5">
                    <Col md='5' className="chartBox px-4 py-4">
                        <Bar chartData={Object.values(averageGameSession)}
                            chartTitle={avgGameSessionChartDetails.chartTitle}
                            labels={avgGameSessionChartDetails.labels}
                            datasets={avgGameSessionChartDetails.datasets}
                        ></Bar>
                    </Col>
                    <Col md='5' className="ms-5 chartBox px-4 py-4">
                        <CommonErrors></CommonErrors>
                    </Col>
                </Row>
            </Container></>
    )
}
export default Dashboard;