const getCurrentTime = () => {
  const currentTime = new Date();

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  return `${currentHour}:${currentMinute}`;
};

const getCurrentMonth = () => {
  const currentTime = new Date();
  const currentMonth = currentTime.getMonth();
  return currentMonth;
};

const getCurrentDay = () => {
  const currentTime = new Date();
  const currentDay = currentTime.getDate();
  return currentDay;
};

const parseTimeString = (timeString: string) => {
  const [hour, minute] = timeString.split(':').map(Number);
  return { hour, minute };
};

const isTimeBetween = (
  startTime: string,
  endTime: string,
  currentTime: string,
) => {
  const { hour: startHour, minute: startMinute } = parseTimeString(startTime);
  const { hour: endHour, minute: endMinute } = parseTimeString(endTime);
  const { hour: currentHour, minute: currentMinute } =
    parseTimeString(currentTime);

  return (
    currentHour >= startHour &&
    currentHour <= endHour &&
    currentMinute >= startMinute &&
    currentMinute <= endMinute
  );
};

export {
  getCurrentTime,
  getCurrentMonth,
  getCurrentDay,
  parseTimeString,
  isTimeBetween,
};
