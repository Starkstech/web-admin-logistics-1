const timeFormat = (updatedAt: number) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentTime = new Date();
  const currentTimeStamp = currentTime.getTime();
  const currentTimeYear = currentTime.getFullYear();
  const apiTime = new Date(updatedAt * 1000);
  const apiTimeStamp = new Date(updatedAt * 1000).getTime();
  const apiTimeDay = apiTime.getDate();
  const apiTimeMonth = apiTime.getMonth();
  const apiTimeYear = apiTime.getFullYear();
  const microSecondsDiff = Math.abs(currentTimeStamp - apiTimeStamp);
  const daysDiff = Math.round(microSecondsDiff / (1000 * 60 * 60 * 24));
  const hourDiff = Math.round(microSecondsDiff / (1000 * 60 * 60));
  const minDiff = Math.round(microSecondsDiff / (1000 * 60));
  const secDiff = Math.round(microSecondsDiff / 1000);
  if (hourDiff < 1 && minDiff < 1) {
    return `${secDiff} seconds ago`;
  } else if (minDiff >= 1 && hourDiff < 1) {
    return `${minDiff} minutes ago`;
  } else if (hourDiff >= 1 && hourDiff <= 24) {
    return `${hourDiff} hours ago`;
  } else if (daysDiff >= 1 && daysDiff <= 30) {
    return `${daysDiff} days ago`;
  } else if (apiTimeYear !== currentTimeYear) {
    return `on ${months[apiTimeMonth]} ${apiTimeDay} ${apiTimeYear}`;
  } else if (apiTimeYear === currentTimeYear) {
    return `on ${months[apiTimeMonth]} ${apiTimeDay}`;
  } else {
    return "null";
  }
};

export default timeFormat
