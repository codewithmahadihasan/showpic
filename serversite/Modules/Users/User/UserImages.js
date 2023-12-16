const { ObjectId } = require("mongodb");
const { ImageCollection } = require("../../../Collections/ImageCollection");
const { usersCollection } = require("../../../Collections/UserCollection");

const userImages = async (req, res, next) => {

    const api = req?.query?.api_key
    console.log(req?.query);
    try {
        const email = req.params.id;
        let images;

        const userId = await usersCollection.findOne({ email: email })
        const uid = userId._id.toString()
        if (api) {

            images = await ImageCollection.find({ userId: uid }).sort({ createdAt: -1 }).toArray();
            res.send({
                data: images, imageQuantity: images.length
            })
        }
        else {

            if (userId.privacy) {
                res.send({
                    message: "Privacy mode Private "
                })
            }
            else {
                const images = await ImageCollection.find({ userId: uid }).sort({ createdAt: -1 }).toArray();

                res.send({ message: "Privacy mode Private", data: images, imageQuantity: images.length })
            }
        }

    } catch (err) {
        console.error('Error in userImages:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { userImages }