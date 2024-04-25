const{ model, Schema}= require('../connection');
 
const mySchema = new Schema({ 
name : {type: String,require: true},
email : {type: String,Unique: true},
password : String,
creatAt:  {type: Date,default: Date.now},

});
module.exports = model('user',mySchema);