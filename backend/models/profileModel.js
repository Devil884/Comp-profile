const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    logo: String,
    address: String,
    industry: String,
    email: String,
    city: String,
    state: String,
    zipcode: String,
    contact: String,
    createdAt: { type : Date, default: Date.now }
});

module.exports = model('profile', mySchema);