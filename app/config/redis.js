let redis = require("redis");

let client = redis.createClient();

client.on('connect', () => console.log('Redis Client Connected'));
client.on('error', (err) => console.log('Redis Client Connection Error', err));



const  test = async () => {
  await client.set('key', 'value');
  const value = await client.get('key');
  console.log(value);
}
test()


module.exports = client;
