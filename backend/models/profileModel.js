const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : {type : String, default: 'Untitled Company Name'},
    logo: {type : String, default: 'logo-placeholder-image'},
    address: String,
    about: String,
    industry: String,
    email: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    contact: String,
    category: String,
    createdAt: { type : Date, default: Date.now }
});

module.exports = model('profile', mySchema);