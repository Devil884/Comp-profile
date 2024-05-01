const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    name : {type : String, require: true},
    email : { type: String, unique: true },
    password : String,
    profile: { type : Types.ObjectId, ref: 'profile' },
    createdAt: { type : Date, default: Date.now }
});

module.exports = model('user', mySchema);