if (process.env.NODE_ENV !== "production") require("dotenv").config();

const port = process.env.PORT || 3000;

const server = require("./server");

require("./mongoose");

server.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
