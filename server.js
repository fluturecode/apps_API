if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("http");
app.createServer().listen(8080);
