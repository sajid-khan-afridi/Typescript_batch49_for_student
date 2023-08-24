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

// //////////////////////handling promise by promise way
//   loginUserPromise("any@gmail.com", 123)
//     .then((email) => {
//       console.log(`Your are login to ${email}`);
//       return getVideosPromise(email);
//     })
//     .then((videos) => {
//       console.log(`You can edit ${videos}`);
//     })
//     .catch((err) => {
//       console.log(err);
//       // return "Error";
//     });

// //////////////////////handling promise by async await way
console.log("before");
(async function asyncFunc() {
  try {
    const loginRes = await loginUserPromise("any@gmail.com", 123);
    console.log(loginRes);
    const videoRes = await getVideosPromise(loginRes);
    console.log(videoRes);
  } catch (error) {
    console.log(error);
  }
})()
// asyncFunc();
console.log("after");