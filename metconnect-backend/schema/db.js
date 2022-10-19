const mongoose = require('mongoose');

// Connecting to database
var query = 'mongodb+srv://metconnect-user:VUQM5xyXXKlnJWpL'
    + '@metconnect.jzq2a49.mongodb.net/master?'
    + 'retryWrites=true&w=majority'
 
const db = (query);

mongoose.connect(db, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
        if (error) {
            console.log("Error!" + error);
        } else {
            console.log("MongoDB connected successfully");
        }
    });

require('./userschema')
require('./listingschema')
require('./offeringschema')