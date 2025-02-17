import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedData from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedData);

const normalizedTimeStamp = (timestamp: any) => {
  return timestamp?.seconds || timestamp;
};

export const diffForHumans = (timestamp: string) => {
  return dayjs(normalizedTimeStamp(timestamp)).fromNow();
};

export const humanFriendlyData = (timestamp: string) => {
  return dayjs(normalizedTimeStamp(timestamp)).format("L - hh:MMA");
};

export const getDate = () => {
  return dayjs(normalizedTimeStamp(Date.now().toString())).format("llll");
};
