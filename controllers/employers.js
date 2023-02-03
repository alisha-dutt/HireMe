const express = require('express');
const router = express.Router();

/* GET employers index */
router.get('/',(req, res)=> {
  res.render('employers/index', { title: 'Employers' });
});


module.exports = router;
