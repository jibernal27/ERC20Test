// contractRoutes.js

var express = require('express');
var app = express();
var contractRoutes = express.Router();
var io = null;
// Require Item model in our routes module
var Contract = require('../models/ContractM');
// Defined store route

exports.initialize = function(ion) {
  io = ion;
};
contractRoutes.route('/add').post(function (req, res) {
  var contract = new Contract(req.body);
      contract.save()
    .then(item => {
      io.emit("contractAdded", item);
    res.status(200).json({'contract': 'Contract added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
contractRoutes.route('/').get(function (req, res) {
  Contract.find(function (err, contracts){
    if(err){
      console.log(err);
    }
    else {
      res.json(contracts);
    }
  });
});



// Defined delete | remove | destroy route
contractRoutes.route('/delete/:id').get(function (req, res) {
  Contract.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) {res.json(err);}
        else {
          io.emit("contractDeleted", req.params.id);
          res.json('Successfully removed');}
    });
});

exports.contractRoutes = contractRoutes;