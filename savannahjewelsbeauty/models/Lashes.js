var mongoose = require('mongoose');
var LashesSchema = new mongoose.Schema({
  name: String,
  type: String,
  image: String,
  fullPrice: Number,
  fillPrice: Number
});
mongoose.model('Lash', LashesSchema);
