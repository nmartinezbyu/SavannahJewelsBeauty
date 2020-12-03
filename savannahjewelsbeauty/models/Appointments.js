var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
  lashId: String,
  lashType: String,
  lashSet: String,
  price: Number,
  date: String
});
mongoose.model('Appointment', AppointmentSchema);
