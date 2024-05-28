//Filters out data for last N days based on a key of object
const lastNDaysData = (data, key, days) => {
    const filteredData = data.filter(item => {
        return (new Date() - new Date(item[key])) <= days * 24 * 60 * 60 * 1000; // days in milliseconds
    });
    return filteredData;
};

export default { lastNDaysData };