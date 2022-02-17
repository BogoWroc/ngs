const helloFn = value => {
  console.log(`Hello after ${value} seconds.`)
};
// Hello after 4 seconds
setTimeout(helloFn, 4 * 1000, 4);
// Hello after 8 seconds
setTimeout(helloFn, 8 * 1000, 8);
// You can define only ONE function
