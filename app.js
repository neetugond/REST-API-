require('dotenv').config();
const express = require('express')
const app = express();
const connectDB = require('./db/connect')
// connect return promise 
const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products');
const { config } = require('dotenv');

app.get('/', (req, res) => {
    res.send("Hello i am live")
});

// middleware or to set router
app.use('/api/products', products_routes);

const start = async () => {
    try {
        // called url as a argument directly form .env file
        await connectDB(process.env.MONGODB_URL);
        app.listen(() => {
            console.log(`server is runing on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()