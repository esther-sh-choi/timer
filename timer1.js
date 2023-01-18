const args = process.argv.slice(2);

const timer = (alarmTimes) => {
  if (!alarmTimes || !alarmTimes.length) {
    return;
  }

  for (const time of alarmTimes) {
    if (Number(time) !== NaN && Number(time) >= 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time * 1000);
    }
  }
};

timer(args);
