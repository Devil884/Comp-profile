//import express
const express = require('express')

const userRouter = require('./routers/userRouter');
const cors = require('cors');

//initialize express
const app = express();
const port = 5000;

//middlewere
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());
//middlewere
app.use('/user', userRouter);

// endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

app.get('/add', (req, res) => {
    res.send('Response from add');
});

//delete route

app.get('/delete', (req, res) => {
    res.send('Response from delete');
});
//update route

app.get('/update', (req, res) => {
    res.send('Response from update');
});


//start server

app.listen(port, () => { console.log('server started'); });