const express = require("express");
const app = express();
const routes = require("./src/routes/pageRouter.js");

const port = 9000;

app.use("/", routes)

app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Successfully ran server on port ${port}`);
});
