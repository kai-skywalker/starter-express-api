const express = require('express');

const app = express();
const PORT = 5000 || 8505;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "pug");

app.use("",require('./routes/router'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
