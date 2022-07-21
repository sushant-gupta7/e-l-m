const { TableClient } = require("@azure/data-tables");

const env = {
  connectionString:"DefaultEndpointsProtocol=https;AccountName=elmcosmosdatabase;AccountKey=Zt4ZjOT2LNvlJVqHtduTt0VIF2PAIgB4PKF2vkRmcJWKMEc4zVqk5uJXBcvxV2GKGJDZ7J8YJsW3cQ2iiVkjAg==;TableEndpoint=https://elmcosmosdatabase.table.cosmos.azure.com:443/;",
  tableName: "EquipmentsData",
};

const serviceClient = TableClient.fromConnectionString(
  env.connectionString,
  env.tableName
);

exports.serviceClient = serviceClient;
