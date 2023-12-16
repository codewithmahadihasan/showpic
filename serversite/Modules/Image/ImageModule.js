const express = require('express');
const { UploadImages } = require('./ImageFunction/ImageFunction');
const { verifyJWT } = require('../Users/JWT');
const { GetImageByID, UploadSingleImage } = require('./ImageFunction/UploadSingle');
const multer = require('multer');
const router = express.Router();




const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/:id', GetImageByID)
router.post('/multiple', verifyJWT, UploadImages)
router.post('/', verifyJWT, upload.single('image'), UploadSingleImage)

// router.post('/', upload.single('pdfFile'), UploadFile);
// router.post('/', UploadFile);

module.exports = router