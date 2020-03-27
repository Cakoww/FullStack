const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
    //const uri = "mongodb://localhost:27017/bobotocorp"
    console.log('CONNECTING TO MONGO');
    const uri = "mongodb+srv://dbAdmin:Cakoww2306@bobotocorp-dkpk1.azure.mongodb.net/bobotocorp?retryWrites=true&w=majority";


    //const connection = new MongoClient(url);
    const connection = new MongoClient(uri, { useNewUrlParser: true });

    await connection.connect();
    //const connection = await MongoClient.connect('http://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

    database = connection.db();
    console.log('SUCESSFUL CONNECTION');
}

async function getDatabase() {
    if (!database) await startDatabase();

    return database;
}


module.exports = {
    getDatabase,
    startDatabase,
};
