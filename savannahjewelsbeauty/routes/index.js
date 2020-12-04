var express = require('express');
var router = express.Router();

//Uploading images 
// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../public/images/',
  limits: {
    fileSize: 10000000
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var appt = require('./../models/Appointments.js');
var lash = require('./../models/Lashes.js');
var Appointment = mongoose.model('Appointment');
var Lash = mongoose.model('Lash');

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

router.post('/lashes/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

router.get('/lashes', function(req, res, next) {
  Lash.find(function(err, lashes){
    if(err){ return next(err); }
    res.json(lashes);
  });
});

router.get('/lashes/:lash', function(req, res) {
  res.json(req.lash);
});

router.param('lash', function(req, res, next, id) {
  var query = Lash.findById(id);
  query.exec(function (err, appointment){
    if (err) { return next(err); }
    if (!lash) { return next(new Error("can't find lash")); }
    req.lash = lash;
    return next();
  });
});

router.post('/lashes', function(req, res, next) {
  var lash = new Lash(req.body);
  lash.save(function(err, lash){
    if(err){ return next(err); }
    res.json(lash);
  });
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username === 'Savannah' && password === "Beauty") {
    res.json({authenticated: true});
  }
  else {
    res.json({authenticated: false});
  }
});


module.exports = router;
