function task(name) {
  function perform() {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Done performing '${name}'!`);
      } else {
        reject(`Rejected '${name}'!`);
      }
    });
  }

  return perform;
}

(async () => {
  const task1 = task("add sugar");
  const task2 = task("add spice");
  const task3 = task("add everything nice");
  const task4 = task("add chemical X");

  const result1 = await task1();
  console.log(result1);
  const result2 = await task2();
  console.log(result2);
  const result3 = await task3();
  console.log(result3);
  const result4 = await task4();
  console.log(result4);

  console.log("Created Powerpuff Girls!");
})();
