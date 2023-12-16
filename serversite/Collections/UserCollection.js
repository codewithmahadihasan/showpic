const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URL

console.log(uri);


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v7,
});





const usersCollection = client.db('ShowPic').collection("users");

module.exports = { usersCollection, client }