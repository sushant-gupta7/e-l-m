const {mongoClient} = require('mongodb');
const {v4:uuidv4} = require('uuid');

const url ="mongodb://sushant-gupta:RsGeqSsPnGOq1DorC4AFIYX1gkLSjIloEGD4pZ8rmooQ8ngvPM19Anv4YTYZqQC2eikT2MoiliXoLbDiUQTceA==@sushant-gupta.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@sushant-gupta@"

const client = new mongoClient(url);

module.exports = async function(context, req) {
    await client.connect();
    const database = client.db('equipments');
    const collection = database.collection("")
}