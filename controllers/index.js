const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index', { title: 'HireMe' });
});
/* GET /about */
router.get('/about',(req, res)=> {
  //get current date and pass it to the abot page
  let date = new Date();
  res.render('about', { 
    date:date
   });
});

module.exports = router;
