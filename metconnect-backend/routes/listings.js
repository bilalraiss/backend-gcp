var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Listing = mongoose.model('Listing');

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send('in listing');
});

router.post('/', (req, res) => {
  if (req.body.id ==='')
      insertRecord(req, res);
      else
      updateRecord(req, res);
});


function insertRecord(req, res) {
  var listing = new Listing();
  listing.loginId = req.body.loginId;
  listing.role = req.body.role;
  listing.price = req.body.price;
  listing.qty = req.body.qty;
  listing.features = req.body.features;
  listing.image = req.body.image;
  listing.categories = req.body.categories;
  listing.size.h = req.body.size.h;
  listing.size.l = req.body.size.l;
  listing.size.w = req.body.size.w;
  listing.save((err, doc) => {
      if (!err)
          // res.redirect('user/list');
          console.log('User inserted Successfully');
      else {
              console.log('Error during record insertion : ' + err);
      }
  });
}

function updateRecord(req, res) {
  Listing.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
      if (!err) { console.log('User updated Successfully'); }
  });
}

router.get('/list', (req, res) => {
  Listing.find(function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
  });
});

router.get('/:loginId/:role', (req, res) => {
  Listing.find({loginId: req.params.loginId, role: req.params.role},function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
  });
});

router.get('/:id', (req, res) => {
  Listing.findById(req.params.id, (err, data) => {
    if(err){
      console.log(err);
  }
  else{
      res.send(data);
  }
  });
});

router.get('/delete/:id', (req, res) => {
  Listing.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
      }
      else { console.log('Error in user delete :' + err); }
  });
});

module.exports = router;
