const mongoose = require('mongoose');
require('dotenv').config()

MONGODB_URI = `mongodb+srv://WizAdmin:${process.env.DB_PASS}@wizcluster.nzntb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;