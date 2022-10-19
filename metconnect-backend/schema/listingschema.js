var mongoose=require('mongoose');
 
var ListingSchema = new mongoose.Schema({
    id:Number,
    loginId:String,
    role:String,
    item:String,        
    price: Number,
    qty: Number,
    size: {
        h: Number,
        l: Number,
        w: Number
      },
    features: String,
    categories: [],
    image: String
});
 
module.exports = mongoose.model(
    'Listing', ListingSchema);


    // {
    //     "item": "shoes",
    //     "price": 20.99,
    //     "qty": 5,
    //     "size": {
    //       "h": 14,
    //       "l": 21,
    //       "w": 1
    //     },
    //     "features": "comfortable-insoles, sneakers.",
    //     "categories": [
    //       "low-top",
    //       "leather"
    //     ],
    //     "image": "items/shoes.jpg",
    //     "role": "buyer",
    //     "loginId": "smuhammad"
    //   }