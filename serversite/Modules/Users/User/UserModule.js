const express = require('express');
const { getUserData, AddNewUser } = require('./UserFunction');
const { userImages } = require('./UserImages');
const router = express.Router();

router.get('/', getUserData)
router.post('/auth', AddNewUser)
router.get('/image/:id', userImages)

// router.post('/', upload.single('pdfFile'), UploadFile);
// router.post('/', UploadFile);

module.exports = router