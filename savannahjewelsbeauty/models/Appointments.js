var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
  lashType: String,
  date: String
});
mongoose.model('Appointment', AppointmentSchema);
