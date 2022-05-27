import { WeekDay } from "../../constants/weekday";
import { DateTime } from "luxon";

export default class Time {
    day: number;
    month: string;
    year: number;
    weekday: string;
    hour: number;
    minute: number;
    second: number;

    constructor(
        day: number,
        month: string,
        year: number,
        weekday: string,
        hour: number,
        minute: number,
        second: number
    ) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.weekday = weekday;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
}
export const dateString: string = DateTime.now().toLocaleString(DateTime.DATE_HUGE);
export const timeString: string = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);

export const tableoftimes: { [id: string]: Time } = {
    realtime: {
        day: getDay(dateString),
        month: getMonth(dateString),
        year: getYear(dateString),
        weekday: getDayOfWeek(dateString),
        hour: getHour(timeString),
        minute: getMinute(timeString),
        second: getSecond(timeString),
    },
};

export function getDay(time: string): number {
    let secondInt = time.split(" ");
    return parseInt(secondInt[1]);
}
export function getMonth(time: string): string {
    let monthInt = time.split(" ");
    if (monthInt[2] === "januar") {
        return "january";
    }
    if (monthInt[2] === "februar") {
        return "february";
    }
    if (monthInt[2] === "mai") {
        return "may";
    }
    if (monthInt[2] === "juni") {
        return "june";
    }
    if (monthInt[2] === "juli") {
        return "july";
    }
    if (monthInt[2] === "oktober") {
        return "october";
    }
    if (monthInt[2] === "desember") {
        return "desember";
    }
    return monthInt[2];
}
export function getYear(datetime: string): number {
    let yearInt = datetime.split(" ");
    return parseInt(yearInt[3]);
}
export function getDayOfWeek(date: string): string {
    let dayOfWeekInt = date.split(" ");
    if (dayOfWeekInt[0] == "mandag") {
        return "monday";
    }
    if (dayOfWeekInt[0] == "tirsdag") {
        return "tuesday";
    }
    if (dayOfWeekInt[0] == "onsdag") {
        return "wednesday";
    }
    if (dayOfWeekInt[0] == "torsdag") {
        return "thursday";
    }
    if (dayOfWeekInt[0] == "fredag") {
        return "friday";
    }
    if (dayOfWeekInt[0] == "lørdag") {
        return "saturday";
    }
    if (dayOfWeekInt[0] == "søndag") {
        return "sunday";
    }
    return "Today has no day D:";
}
export function getDayOfWeekEnum(date: string): WeekDay {
    let dayOfWeekInt = date.split(",");
    if (dayOfWeekInt[0] == "mandag") {
        return WeekDay.monday;
    }
    if (dayOfWeekInt[0] == "tirsdag") {
        return WeekDay.tuesday;
    }
    if (dayOfWeekInt[0] == "onsdag") {
        return WeekDay.wednesday;
    }
    if (dayOfWeekInt[0] == "torsdag") {
        return WeekDay.thursday;
    }
    if (dayOfWeekInt[0] == "fredag") {
        return WeekDay.friday;
    }
    if (dayOfWeekInt[0] == "lørdag") {
        return WeekDay.saturday;
    }
    if (dayOfWeekInt[0] == "søndag") {
        return WeekDay.sunday;
    }
    return WeekDay.friday;
}
export function getHour(time: string): number {
    let hourInt = time.split(":");
    return parseInt(hourInt[0]);
}
export function getMinute(time: string): number {
    let minuteInt = time.split(":");
    return parseInt(minuteInt[1]);
}
export function getSecond(time: string): number {
    let secondInt = time.split(":");
    return parseInt(secondInt[2]);
}
