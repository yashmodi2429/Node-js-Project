const express = require('express');
const app = express();
const approute = require('../server/routes/app.route');
const mongoDb = require('./connection/dbConnect');

const start = function () {
    mongoDb.connect()
      .then(startServer)
      .catch(function (err) {
        console.error(err);
      })
  }
  const startServer = function () {
    return app.listen(27017, function () {
      console.info('Server is running on port:');
    });
  }
  


app.use('/api',approute);

// app.use('*',express.static(path.join(__dirname,'views/index.html')));
app.use(express.static('views'));
app.listen(3000);


module.exports = {
    start: start
  };
  