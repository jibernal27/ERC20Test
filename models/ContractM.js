var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Contract = new Schema({
  address: {
    type: String
  } 
},{timestamps: true}
,{
    collection: 'contracts'
});

module.exports = mongoose.model('contract', Contract);