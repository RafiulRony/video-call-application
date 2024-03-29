const redisClient = require("./config/redis");

exports.saveCallId = (key, value) => {
  console.log('okay');
  console.log(key);
  console.log(value);
  return new Promise((resolve, reject) => {
    redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
        console.log('error in server model');
      }
      console.log('solve in server');
      resolve(res);
    });
  });
};

exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};
