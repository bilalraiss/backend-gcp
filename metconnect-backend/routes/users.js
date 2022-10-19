var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  if (req.body.id ==='')
      insertRecord(req, res);
      else
      updateRecord(req, res);
});


function insertRecord(req, res) {
  var user = new User();
  user.loginId = req.body.loginId;
  user.userName = req.body.userName;
  user.role = req.body.role;
  user.address = req.body.address;
  user.email = req.body.email;
  user.companyName = req.body.companyName;
  user.save((err, doc) => {
      if (!err)
          // res.redirect('user/list');
          console.log('User inserted Successfully');
      else {
              console.log('Error during record insertion : ' + err);
      }
  });
}

function updateRecord(req, res) {
  User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
      if (!err) { console.log('User updated Successfully'); }
  });
}

router.get('/list', (req, res) => {
  User.find(function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
    }
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err){
      console.log(err);
  }
  else{
      res.send(data);
  }
  });
});

router.get('/delete/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
      }
      else { console.log('Error in user delete :' + err); }
  });
});

module.exports = router;
