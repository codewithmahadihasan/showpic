const jwt = require('jsonwebtoken');
const { usersCollection } = require('../../Collections/UserCollection');
const { ObjectId } = require("mongodb");

const verifyJWT = async (req, res, next) => {

    const token = req.query.api_key
    console.log(token);
    console.log(token);
    if (!token) {
        return res.status(401).send({ status: 101, message: 'Please provide your api_key' })
    }
    else {
        try {
            const userIdQuery = { _id: new ObjectId(token) }
            const findUser = await usersCollection.findOne(userIdQuery)

            if (findUser) {
                next()
            }
            else {
                return res.status(403).send({ status: 205, message: "Invalid api key" });
            }

        } catch (error) {
            return res.status(500).send({ status: 506, message: `Internal Server Error` });
        }
    }



    // jwt.verify(token, process.env.TOKEN_PIN, function (err, decoded) {
    //     if (err) {
    //         return res.status(403).send({ message: 'Please login again' })
    //     }
    //     req.decoded = decoded
    //     next()
    // });


}





module.exports = { verifyJWT }