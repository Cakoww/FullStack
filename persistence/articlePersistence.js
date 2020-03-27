const { getDatabase } = require('../database/database');

const collectionName = 'article';

async function getArticle() {
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function insertArticle(article) {
    const database = await getDatabase();
    return await database.collection(collectionName).insertOne(article);
}

module.exports = {
    getArticle, 
    insertArticle
};
