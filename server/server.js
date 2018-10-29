// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/health', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('Health')

  db.collection('Health').insertOne({
    text: 'testing health',
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert text', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});