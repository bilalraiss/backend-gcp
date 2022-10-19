var mongoose=require('mongoose');
 
var UserSchema = new mongoose.Schema({
    id:Number,
    loginId:String,
    userName:String,
    role:String,
    address:String,
    email:String,
    companyName:String
});
 
module.exports = mongoose.model(
    'User', UserSchema);