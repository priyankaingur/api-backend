import {useState, useEffect} from 'react';
import UrlEndpoints from "../../utility/UrlEndpoints.js";
import Services from "../../Services/api.js";
import Pie from "../charts/Pie.jsx";
import ChartConstants from "../../utility/constants/ChartConstants.js";

const CommonErrors = () => {
    const [commonErrors, setCommonErrors] = useState([]);
    const timePeriods = Object.values(ChartConstants.TIME_PERIODS).map(t => t.VALUE)
    const [chartDetails, setChartDetails] = useState({});
    const menuList= Object.values(ChartConstants.TIME_PERIODS);

    useEffect(() => {
        Services.update(UrlEndpoints.COMMON_ERRORS, { "days": timePeriods })
            .then(response => {
                const last24Hrs = response[timePeriods[0]];
                setCommonErrors(response)
                const chartDetails = getChartDetails(last24Hrs, timePeriods[0], ChartConstants.MOST_COMMON_ERRORS, ChartConstants.COMMON_ERRORS_DATASET_KEY);
                setChartDetails(chartDetails)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const menuChange = (menu) => {
        const dataArr = commonErrors[menu];
        const chartDetails = getChartDetails(dataArr, menu, ChartConstants.MOST_COMMON_ERRORS, ChartConstants.COMMON_ERRORS_DATASET_KEY);
        setChartDetails(chartDetails);
    }
    const getChartDetails = (dataArr, value, title) => {
        const timePeriod = Object.values(ChartConstants.TIME_PERIODS).find(t => t.VALUE == value)
        return {
            title: `${title} - ${timePeriod.LABEL}`,
            data: dataArr.map(e=>e.count),
            legends: dataArr.map(e=>e.msg)
        };
    }
    return (
            <Pie
                menuList={menuList}
                menuChangeCallback={menuChange}
                data={chartDetails.data} legends={chartDetails.legends} title={chartDetails.title} label="occurrences"></Pie>
    );
};

export default CommonErrors;
