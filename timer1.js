const args = process.argv.slice(2);

const timer = (alarmTimes) => {
  if (!alarmTimes || !alarmTimes.length) {
    return;
  }
  const filteredTimes = alarmTimes
    .map((timeStr) => Number(timeStr))
    .filter((time) => Number.isInteger(time) && time >= 0);
  filteredTimes.sort();

  for (const time of filteredTimes) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * 1000);
  }
};

timer(args);
