const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://vigneshwarancj:yrXSpk8ZUCUwyo7h@namastenodejs.kapulxi.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNodeJS";

const client = new MongoClient(url);

const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // const data = {
  //   userName: "Vignesh",
  //   degree: "Bachelor",
  //   specialization: "Biotechnology",
  // };
  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted document =>", insertResult);
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  return "done";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
