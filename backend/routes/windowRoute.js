/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const window = require('../controller/window');
const router = express.Router();

router.post('/postupload', window.imgUpload, window.postUpload);
router.get('/postedit', window.postEdit);
router.get('/imgfind', window.ImgFind);

module.exports = router;