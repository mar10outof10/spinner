let interval = 0;
const spinArr = ['|', '/', '-', '\\'];

setInterval(() => {
  let spinDex = interval % 4;
  process.stdout.write(`\r${spinArr[spinDex]}`);
  interval++;
}, 200);