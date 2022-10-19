var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Offering = mongoose.model('Offering');

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send('in offering');
});

router.post('/', (req, res) => {
  if (req.body.id ==='')
      insertRecord(req, res);
      else
      updateRecord(req, res);
});


function insertRecord(req, res) {
  var offering = new Offering();
  offering.loginId = req.body.loginId;
  offering.role = req.body.role;
  offering.offering = req.body.offering;
  offering.save((err, doc) => {
      if (!err)
          // res.redirect('user/list');
          console.log('User inserted Successfully');
      else {
              console.log('Error during record insertion : ' + err);
      }
  });
}

function updateRecord(req, res) {
  Offering.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
      if (!err) { console.log('User updated Successfully'); }
  });
}

router.get('/list', (req, res) => {
  Offering.find(function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
  });
});

router.get('/:loginId/:role', (req, res) => {
  Offering.find({loginId: req.params.loginId, role: req.params.role},function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
  });
});

router.get('/:id', (req, res) => {
  Offering.findById(req.params.id, (err, data) => {
    if(err){
      console.log(err);
  }
  else{
      res.send(data);
  }
  });
});

router.get('/delete/:id', (req, res) => {
  Offering.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
      }
      else { console.log('Error in user delete :' + err); }
  });
});

module.exports = router;
