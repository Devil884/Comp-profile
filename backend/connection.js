const mongoose = require('mongoose');

const url ="mongodb+srv://7376890457atul:Atul123@cluster0.kogadqb.mongodb.net/Company-profile?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) =>{
    console.log('connected to db');
}).catch((err) =>{
    console.log(err);
});
 module.exports = mongoose;