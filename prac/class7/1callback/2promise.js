// Using Promises
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Fetched data";
      resolve(data);
    }, 1000);
  });
}

console.log("before");
fetchData().then((data) => {
  console.log(data);
});
console.log("after");
