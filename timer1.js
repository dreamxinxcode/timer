let args = process.argv.slice(2);

const cleanData = (data) => {
  return data.filter(num => num > 0 || Number.isInteger(num));
};

const timer = (times) => {
  for (let time of times) {
    setTimeout(() => {
      process.stdout.write('.');
    }, times[time] * 1000);
  }
};

args = cleanData(args);
timer(args);