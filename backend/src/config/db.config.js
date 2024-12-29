const { MongoClient, ServerApiVersion } = require('mongodb');
const { PUBLIC_DATA } = require("../../constant");

// Create a MongoClient instance
const client = new MongoClient(PUBLIC_DATA.mongo_uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Function to connect to the database
async function ConnectDB() {
    try {
        await client.connect();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit the process if the connection fails
    }
}

module.exports = { ConnectDB, client };
