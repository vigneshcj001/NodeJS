const { MongoClient } = require("mongodb");

// ✅ Use your real password here — make sure it's URL encoded if it contains special characters
const uri =
  "mongodb+srv://vigneshwarancj:qbS2AuhH4fFKW35G@namastenodejs.kapulxi.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNodeJS";

// Create a new MongoClient instance
const client = new MongoClient(uri);

const dbName = "HelloWorld";

async function main() {
  try {
    // Connect to the cluster
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas");

    const db = client.db(dbName);
    const collection = db.collection("User");

    // Sample data
    const data = {
      firstname: "Ranveer",
      lastname: "Singh",
      city: "Mumbai",
      phoneNumber: "987543210",
    };

    // Insert data
    const insertResult = await collection.insertOne(data);
    console.log("📦 Inserted document =>", insertResult.insertedId);

    // Read all documents
    const findResult = await collection.find({}).toArray();
    console.log("📄 Found documents =>", findResult);

    // Count documents
    const countResult = await collection.countDocuments({});
    console.log("🔢 Count of documents in 'User' collection =>", countResult);

    // Find documents with filter (e.g., firstname: "Deepika")
    const deepikaCount = await collection.countDocuments({
      firstname: "Deepika",
    });
    console.log("🔍 Number of users named Deepika =>", deepikaCount);

    return "✅ MongoDB operations completed.";
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    // Ensure client is closed
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}

main().then(console.log).catch(console.error);
