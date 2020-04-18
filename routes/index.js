var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/films', function(req, res){
  res.render('films', {
    title: 'Films'
  });
});

router.get('/template', function(req, res){
  res.render('template', {
    title: 'Template'
  });
});

module.exports = router;
