const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/memorial';

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log(`MongoDB connected at ${connectionString}`))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));



module.exports = {

}