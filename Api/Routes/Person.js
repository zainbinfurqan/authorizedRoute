const express = require('express');
const router = express.Router();
const { authentication } = require('../../util-function/util-authentication')
const { fetchPersonProfile } = require('../../controller/personController')
router.get('/', authentication, fetchPersonProfile);
module.exports = router;