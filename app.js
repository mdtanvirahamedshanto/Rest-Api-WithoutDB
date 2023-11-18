const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));

exports.module = app;
