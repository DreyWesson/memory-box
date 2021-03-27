import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js.js";
// import the d seed data from /data/seed.js
// import data schema
import { Post } from "memories_schemas_and_middleware";
import seed from "./seed.js";
connectDB();
// var contacts = [
//   {
//     name: "Drey Wesson",
//     email: "drey@wesson.com",
//     zipCode: 10016,
//   },
//   {
//     name: "Jon Wexler",
//     email: "jon@jonwexler.com",
//     zipCode: 10016,
//   },
//   {
//     name: "Chef Eggplant",
//     email: "eggplant@recipeapp.com",
//     zipCode: 20331,
//   },
//   {
//     name: "Professor Souffle",
//     email: "souffle@recipeapp.com",
//     zipCode: 19103,
//   },
// ];

// Set up the connection to the database.
Post.deleteMany()
  .exec()
  .then(() => {
    // Remove all existing data.
    console.log("Subscriber data is empty!");
  });

// Loop through
var commands = [];
// subscriber objects to create promises.
posts.forEach((tags, title, message, selectedFile, name, creator) => {
  commands.push(
    Post.create({
      tags,
      title,
      message,
      selectedFile,
      name,
      creator,
    })
  );
});
Promise.all(commands)
  .then((res) => {
    // Log confirmation after promises resolve.
    console.log(JSON.stringify(res));
    mongoose.connection.close();
  })
  .catch((error) => console.log(`ERROR: ${error}`));
