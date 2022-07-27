const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = "https://elm.documents.azure.com:443/";

const key = "kgJwxO4HZZSpXZlKr8yS5f4MgnExjZHWRV2mjFFptf342SlHhhQPjH4X0nG06ksa47QEwTBHkB3gAhDkunyp2Q==";

const client = new CosmosClient({ endpoint, key });

const databaseId = "equipments"
const containerId = "equipments"

const database = client.database(databaseId);
const container = database.container(containerId);

exports.data = {
    database: database,
    container: container,
};