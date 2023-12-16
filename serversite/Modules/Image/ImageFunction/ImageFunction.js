// const UploadSingleImage = async (req, res, next) => {
//     // need to here upload sigle image with multer here save  
// }
const multer = require('multer');
const { MongoClient } = require('mongodb');
const { ImageCollection } = require('../../../Collections/ImageCollection');

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

const UploadImages = async (req, res, next) => {
    const userId = req.query.api_key
    console.log(userId, 'userid');
    try {
        upload.array('images')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }

            const uploadedImages = [];

            for (const imageFile of req.files) {
                const imageDocument = {
                    userId: userId,
                    name: imageFile.originalname,
                    data: imageFile.buffer,
                    contentType: imageFile.mimetype,
                    createdAt: Date.now(),
                };

                const uploadedImage = await ImageCollection.insertOne(imageDocument);

                // Build URL based on your storage strategy (adjust accordingly)
                const imageUrl = `https://showpic-api.vercel.app/api/v1/image/${uploadedImage.insertedId}.${imageFile.mimetype.split('/')[1]}`; // Access inserted ID using 'insertedId'

                uploadedImages.push({
                    redirect_url: `https://showpic.vercel.app/image/${uploadedImage.insertedId}.${imageFile.mimetype.split('/')[1]}`,
                    name: imageFile.originalname,
                    url: imageUrl,
                });
            }

            res.send({
                message: `${uploadedImages.length} images uploaded successfully`,
                images: uploadedImages,
            })
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = { UploadImages }