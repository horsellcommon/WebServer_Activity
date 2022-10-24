const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.listen(3050, () => {
  console.log("Listening on post 3050...");
});
