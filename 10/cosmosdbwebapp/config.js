var config = {};

config.uri = process.env.COSMOS_URI || "";
config.primaryKey = process.env.COSMOS_PRIMARY_KEY || "";
config.database = { "id": process.env.COSMOS_DATABASE || "pizzadb" };
config.collection = { "id": process.env.COSMOS_COLLECTION || "pizzas" };

config.isConfigured = function () {
  return Boolean(config.uri && config.primaryKey);
};

module.exports = config;
