var express = require('express');
var router = express.Router();

var createError = require('http-errors');
var db = require("./database.js")


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

router.get("/api/users", (req, res, next) => {
  var sql = "select * from user"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});


router.get("/api/user/:id", (req, res, next) => {
  var sql = "select * from user where id = ?"
  var params = [req.params.id]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":row
      })
    });
});


router.post("/api/user/", (req, res, next) => {
  
  var errors=[]
  if (!req.body.name){
      errors.push("No name specified");
  }
  if (!req.body.surname){
      errors.push("No surname specified");
  }
  if (!req.body.subject){
    errors.push("No subject specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  var data = {
      name: req.body.name,
      email: req.body.surname,
      country : req.body.country,
      subject : req.body.subject
  }
  var sql ='INSERT INTO user (name, surname, country, subject) VALUES (?,?,?,?)'
  var params =[data.name, data.email, data.password]

  db.run(sql, params, function (err, result) {
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      res.json({
          "message": "success",
          "data": data,
          "id" : this.lastID
      })
  });
})

router.patch("/api/user/:id", (req, res, next) => {
  var data = {
      name: req.body.name,
      email: req.body.email,
      password : req.body.password ? md5(req.body.password) : undefined
  }
  db.run(
      `UPDATE user set 
         name = coalesce(?,name), 
         email = COALESCE(?,email), 
         password = coalesce(?,password) 
         WHERE id = ?`,
      [data.name, data.email, data.password, req.params.id],
      (err, result) => {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({
              message: "success",
              data: data
          })
  });
})


router.delete("/api/user/:id", (req, res, next) => {
  db.run(
      'DELETE FROM user WHERE id = ?',
      req.params.id,
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({"message":"deleted", rows: this.changes})
  });
})


// Root path
router.get("/", (req, res, next) => {
  res.json({"message":"Ok"})
});


module.exports = router;
