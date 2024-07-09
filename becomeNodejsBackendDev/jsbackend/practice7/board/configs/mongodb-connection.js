const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://mygoTest:test1234@cluster0.e3nsvf7.mongodb.net/board?retryWrites=true&w=majority";

module.exports = function(callback) {
    return MongoClient.connect(uri, callback);
};