// packages
moment.locale("en");
import "moment/locale/ar";
import moment from "moment-timezone";
// lib
import { timeZone } from "@/lib/site/time/time";

// check date to days
export const checkDateToDays = (date: string, day: number) => {
  return moment(date).isoWeekday() === day;
};

// time to arabic label
export const timeToArabic = (time: string) => {
  return moment(time, "HH:mm").locale("ar").format("hh:mm A");
};

// format date to string english
export const dateToString = (date: Date) => {
  return moment(date).format("YYYY-MM-DD");
};

// format date to string english
export const dateToStringAr = (date: Date) => {
  return moment(date).format("DD-MM-YYYY");
};

// format date to string english
export const dateTimeToString = (date?: Date) => {
  if (!date) {
    // date
    const { originDate } = timeZone();

    // formated
    return moment(originDate).format("DD-MM-YYYY HH:mm");
  }
  return moment(date).format("DD-MM-YYYY HH:mm");
};

// format date to string english
export const dateToTime = (
  date: Date,
  is24Hour: boolean = true,
  locale: "en" | "ar" = "en"
): string => {
  // format
  const format = is24Hour ? "HH:mm" : "hh:mm A";
  // return
  return moment(date).locale(locale).format(format);
};

// format date to string english
export const dateToValidString = (date: Date) => {
  return moment(date).format("YYYY-MM-DD");
};

// format date to string arabic
export const dateToArString = (date: Date) => {
  return moment(date).locale("ar").format("DD-MM-YYYY");
};

export const dateToDayEn = (date: string) => {
  return moment(date).locale("en").format("dddd");
};

export const dateToDayAr = (date: string) => {
  return moment(date).locale("ar").format("dddd");
};

export const datetodayNumber = (date: string) => {
  return moment(date).day();
};

// free session
export const getWeekStartSaturday = (date: Date) => {
  const m = moment(date).tz("Asia/Riyadh").startOf("day");
  const day = m.isoWeekday();

  // If it's Saturday (6), keep today; else, subtract days
  return m.subtract(day >= 6 ? 0 : day + 1, "days").toDate();
};
