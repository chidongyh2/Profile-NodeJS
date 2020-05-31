const express = require('express')
const app = express();
// IMPORT ROUTE
const authRoutes = require("./routes/auth");

const port = process.env.PORT || 8000;
const version = process.env.version || 1;
// MIDDLEWARE ROUTE
app.use(`/api/v${version}`, authRoutes);

const server  = app.listen(port, () => {
    console.log(`"hello every body" ${port} ${version}`);
})


