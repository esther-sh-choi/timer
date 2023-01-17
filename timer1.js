const args = process.argv.slice(2);

const timer = (alarmTimes) => {
  if (!alarmTimes || !alarmTimes.length) {
    return;
  }
  const filteredTimes = alarmTimes.filter((time) => Number(time) >= 0);

  for (const time of filteredTimes) {
    setTimeout(() => {
      console.log(time);
      process.stdout.write("\x07");
    }, time * 1000);
  }
};

timer(args);
