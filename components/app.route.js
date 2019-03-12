const express = require('express');
const app = express();
const router = express.Router();
const appComponent = require('../components/app.components');



router.post('/data',appComponent.register);


module.exports = router;