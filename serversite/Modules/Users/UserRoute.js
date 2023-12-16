const express = require('express');
const { GetJWT } = require('./JWT');
// const { UploadFile } = require('./UploadFileModule');
// const multer = require('multer');
const router = express.Router();

// const storage = multer.memoryStorage(); // Store the file in memory
// const upload = multer({ storage: storage });

// router.get('/', GetJWT)

// router.post('/', upload.single('pdfFile'), UploadFile);
// router.post('/', UploadFile);

module.exports = router