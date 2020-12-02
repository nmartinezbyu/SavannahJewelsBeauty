var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

router.get('/appointments', function(req, res, next) {
  Appointment.find(function(err, appointments){
    if(err){ return next(err); }
    res.json(appointments);
  });
});

router.get('/appointments/:appointment', function(req, res) {
  res.json(req.appointment);
});

router.post('/appointments', function(req, res, next) {
  var appointment = new Appointment(req.body);
  appointment.save(function(err, appointment){
    if(err){ return next(err); }
    res.json(appointment);
  });
});

router.param('appointment', function(req, res, next, id) {
  var query = Appointment.findById(id);
  query.exec(function (err, appointment){
    if (err) { return next(err); }
    if (!appointment) { return next(new Error("can't find appointment")); }
    req.appointment = appointment;
    return next();
  });
});


module.exports = router;
