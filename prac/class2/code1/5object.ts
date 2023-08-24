interface Person {
    name: string;
    age: number;
  }
  

// const obj:Person = {}; // typescript error
// const obj:any={}; //solution-1: no error
// const obj:Person={} as Person; //solution-2: no error with type assertion
const obj:Person=<Person>{}; //solution-3: no error with type assertion
obj.name = "Alice"; // add a property using dot notation
obj["age"] = 25; // add a property using bracket notation
console.log(obj); // {name: "Alice", age: 25}