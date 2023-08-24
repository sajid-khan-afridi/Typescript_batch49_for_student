const loginUser = (email, pass, callback) => {
  setTimeout(() => {
    callback(email);
  }, 2000);
};

const getVideos = (email, cb) => {
  setTimeout(() => {
    cb(["video1", "video2", "video3"]);
  }, 3000);
};

console.log("before");
//callback hell does not work as asynchronous because each setTimeout take time as synchronously
loginUser("any@gmail.com", 123, (email) => {
  console.log(`You are login to ${email}`);
  getVideos(email, (videos) => {
    console.log(`You can edit ${videos}`);
  });
});
//getVideos() is dependent on loginUser(). Firstly loginUser() will initiate first then getVideos() will be initiated
// in callback hell one function is dependent on another function
console.log("after");
