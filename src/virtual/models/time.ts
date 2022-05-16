import { parse } from "dotenv";
import { DateTime } from "luxon";






export default class Time {
    day: string;
    month: string;
    year: string;
    weekday: string;
    hour: number;
    minute: number;
    second: number;

    constructor(
        day: string,
        month: string,
        year: string,
        weekday: string,
        hour: number,
        minute: number,
        second: number,
    ) {
            this.day = day;
            this.month = month;
            this.year = getYear(dateString);
            this.weekday = getDayOfWeek(dateString)
            this.hour = getHour(timeString);
            this.minute = getMinute(timeString);
            this.second = getSecond(timeString);
        }

} 
let dateString: string = DateTime.now().toLocaleString(DateTime.DATE_HUGE);
let timeString: string = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);





function getSecond(time: string): number{
    let dayOfWeek = time.split(",")
    return parseInt(dayOfWeek[2])
}
function getMinute(time: string): number{
    let dayOfWeek = time.split(",")
    return parseInt(dayOfWeek[1])
}
function getHour(time: string): number{
    let dayOfWeek = time.split(",")
    return parseInt(dayOfWeek[0])
}

function getDayOfWeek(date:string):string{
    let dayOfWeek = date.split(",")
    return dayOfWeek[0]
},

function getDate(datetime:string):string{
    let date = datetime.split(",")
    return date[1]
}
function getYear(datetime:string):string{
    let year = datetime.split(",")
    return year[2]
}
