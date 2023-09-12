const express = require('express')
const app = express()
const port = 5000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => console.log('Database connected')).catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


