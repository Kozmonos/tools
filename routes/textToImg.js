const express = require('express');
const router = express.Router();

const {textToImg} = require('../controller/textToImg');

router.get('/',textToImg);

module.exports = router;