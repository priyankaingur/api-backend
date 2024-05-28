const validateLog = (log) => {
    if (log.gameSessionObj && log.levelSessions) {
        if (IsValidDate(log.gameSessionObj.startTime) &&
            IsValidDate(log.gameSessionObj.endTime) &&
            IsValidStartAndEndTime(log.gameSessionObj.startTime, log.gameSessionObj.endTime)) {
            return IsValidateLevel(log.levelSessions);
        } else {
            return false;
        }
    } else {
        return false;
    }
};
// Start date & time should be less than end date and time
const IsValidStartAndEndTime = (start, end) => {
    return (new Date(start) < new Date(end));
};
const IsValidDate = (date) => {
    return !isNaN(new Date(date));
};

const IsValidateLevel = (levelsArr) => {
    const errorArr = levelsArr.filter(level => {
        return (!level.levelName || level.levelName === "" ||
            !level.userInteractions
        );
    });
    return errorArr.length === 0;
};
module.exports = {
    IsValidDate,
    validateLog,
    IsValidStartAndEndTime,
    IsValidateLevel
};