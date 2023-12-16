const { ObjectId } = require("mongodb");
const { usersCollection } = require("../../../Collections/UserCollection");


const getUserData = async (req, res, next) => {
    const id = req.query.id
    const query = { _id: new ObjectId(id) }
    try {
        const user = await usersCollection.findOne(query)
        console.log(user);
    } catch (error) {

    }
    const user =
        console.log(id);
}

const AddNewUser = async (req, res, next) => {
    let user = req.body;
    if (user.email) {
        const query = { email: user.email }
        const findUser = await usersCollection.findOne(query)
        if (!findUser) {
            // need to add user on userCollection
            user = await usersCollection.insertOne(user)
            const token = user.insertedId.toString()
            res.send({ success: false, message: "This user registration successful, please try to login now" })
        }
        else {
            const token = findUser._id.toString()
            res.send({ success: true, message: "The user has been registered", token: token })
        }
    }
    else {
        res.status(401).send({ success: false, message: 'User data not a valid formate' });
    }
}




module.exports = { getUserData, AddNewUser }