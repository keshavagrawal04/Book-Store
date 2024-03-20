require("dotenv").config();
const app = require("./server");
const { database } = require("./utils");

const PORT = process.env.PORT || 8000;

try {
  database.connect();
  app.listen(PORT, () => {
    console.log(`Listening On Port : ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
