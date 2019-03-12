const express = require('express');
const app = express();
const router = express.Router();
const route = require('../components/app.route');
const bodyParser = require('body-parser');
console.log("Route");

router.use(bodyParser.urlencoded({
    extended: false
  }));
  
  router.use(bodyParser.json());
  
  router.use(function (error, req, res, next) {
    if (error) {
      res.send('Invalid Json');
    }
  })
  
  // routes

router.use('/register',route);

module.exports = router;
