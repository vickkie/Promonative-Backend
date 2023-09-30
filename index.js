const express = require('express')
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
const app = express()

app.use(cors({
  origin: 'http://localhost:9000', // Allow requests from http://localhost:9000
  credentials: true,
}));

  
const productRouter = require('./routes/products');
const port = 9000;

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => console.log('Database connected')).catch((err) => console.log(err));


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use('/api/products', productRouter);


app.listen( process.env.PORT || port,  () => console.log(`Example app listening on port ${process.env.PORT}!`));

// ts-node-dev --respawn index.js