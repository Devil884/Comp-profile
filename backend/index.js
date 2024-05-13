// import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const profileRouter = require('./routers/profileRouter');
const utilRouter = require('./routers/util');
const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

// endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.use(express.static('./static/uploads'));

// start server
app.listen(port, () => { console.log('server started'); });