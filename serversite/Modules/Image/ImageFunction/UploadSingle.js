const { ImageCollection } = require("../../../Collections/ImageCollection");
const { ObjectId } = require("mongodb");

const UploadSingleImage = async (req, res, next) => {
    const id = req.query.api_key
    try {
        const imageDocument = {
            userId: id,
            name: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
            createdAt: Date.now(),
        };
        const result = await ImageCollection.insertOne(imageDocument);

        const imageData = {
            redirect_url: `https://showpic.vercel.app/image/${result.insertedId}`,
            name: req.file.originalname,
            url: `https://showpic-api.vercel.app/image/${result.insertedId}.${req.file.mimetype.split('/')[1]}`,

        };

        res.json({ imageData });
    } catch (err) {
        next(err);
    }
};



const GetImageByID = async (req, res, next) => {
    try {
        let imageId = req.params.id;
        imageId = imageId.replace(/\.[^/.]+$/, "");

        const imageDoc = await ImageCollection.findOne({ _id: new ObjectId(imageId) });

        if (!imageDoc) {
            res.status(404).json({ error: 'Image not found' });
        } else {
            res.contentType('image/jpeg');
            const imageBuffer = Buffer.from(imageDoc.data.buffer, 'base64');
            res.status(200).send(imageBuffer);
        }
    } catch (err) {
        console.error('Error in GetImageByID:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { GetImageByID, UploadSingleImage }


