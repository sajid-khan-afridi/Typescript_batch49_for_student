// //resolve and reject are the callback functions and also work as callback function
// // here we create promise object
// // console.dir(promise);

///////////////////////////// PART-1
// const promise = new Promise((resolve, reject) => {
//   let marks = 70;
//   if (marks >= 80) resolve();
//   else reject();
// });

// promise
//   .then(() => {
//     console.log("Promise resolve");
//   })
//   .catch(() => {
//     console.log("Rejected");
//   });

//////////////////////////PART-2
// const promiseFunc = (marks) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (marks >= 80) resolve("promise resolved");
//       else reject("Rejected");
//     }, 2000);
//   });
// };
// promiseFunc(80)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

////////////////////////// PART-3
//applying same logic of 4callback.js in promise
// const loginUser = (email, pass) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(email); //WORK AS callback function
//     }, 2000);
//   });
// };

// const getVideos = (email) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["video1", "video2", "video3"]);
//     }, 3000);
//   });
// };

// loginUser("any@gmail.com", 123)
//   .then((email) => {
//     console.log(`You are logged in as ${email}`);
//     return getVideos(email);
//   })
//   .then((videos) => {
//     console.log(`You can edit ${videos}`);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

/////////////////////////////PARK-4
const loginUserPromise = (email, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "any@gmail.com" && pass === 123) resolve(email);
      else reject("You entered invalid email or password");
    }, 2000);
  });
};

const getVideosPromise = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) resolve(["video1", "video2", "video3"]);
      else reject("Please Enter email");
    }, 2000);
  });
};

console.log("before");
loginUserPromise("any@gmail.com", 123)
  .then((email) => {
    console.log(`Your are login to ${email}`);
    return getVideosPromise(email);
  })
  .then((videos) => {
    console.log(`You can edit ${videos}`);
  })
  .catch((err) => {
    console.log(err);
    // return "Error";
  });
//   .then((err2) => {
//     console.log(`it is then of catch ${err2}`);
//   });

console.log("after");
