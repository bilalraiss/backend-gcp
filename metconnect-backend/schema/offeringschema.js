var mongoose=require('mongoose');
 
var OfferingSchema = new mongoose.Schema({
    id:Number,
    loginId:String,
    role:String,
    offering: {}
});
 
module.exports = mongoose.model(
    'Offering', OfferingSchema);