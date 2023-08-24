function fetchData(callback) {
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log(data);
}

console.log("before");
fetchData(processData);
console.log("after");
