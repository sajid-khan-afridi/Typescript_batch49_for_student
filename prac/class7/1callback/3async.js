// Using async/await
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Fetched data";
      resolve(data);
    }, 1000);
  });
}

async function processData() {
  const data = await fetchData();
  console.log(data);
}
console.log("before");
processData();
console.log("after");
