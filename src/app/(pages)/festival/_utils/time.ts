const getCurrentTime = () => {
  const currentTime = new Date();

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // for test purpose
  // return `16:${currentMinute}`;
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

  // for test purpose
  // return 29;
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
  const startMinutes = parseTime(startTime);
  const endMinutes = parseTime(endTime);
  const currentMinutes = parseTime(currentTime);

  return currentMinutes >= startMinutes && currentMinutes < endMinutes;
};

const parseTime = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const formatTime = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export {
  getCurrentTime,
  getCurrentMonth,
  getCurrentDay,
  parseTimeString,
  isTimeBetween,
  parseTime,
  formatTime,
};
