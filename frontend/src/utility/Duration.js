import {intervalToDuration} from "date-fns";

const getDuration = (startTime, endTime) => {
    let {hours=0, minutes=0, seconds=0} = intervalToDuration({
        start: startTime,
        end: endTime
    });
    const hoursLabel ='hr' + getSuffixLabel(hours);
    const minutesLabel = 'min' + getSuffixLabel(minutes);
    const secondsLabel = 'sec' + getSuffixLabel(seconds);
    return `${hours} ${hoursLabel} : ${minutes} ${minutesLabel} : ${seconds} ${secondsLabel}`;
}

const getSuffixLabel=(value)=>{
    return value === 1 ? '' : 's';

}

export default getDuration