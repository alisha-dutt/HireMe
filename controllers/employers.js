const express = require('express');
const router = express.Router();

// add fs to read the data file
const fs = require('fs');

/* GET employers index (the module home page) */
router.get('/', (req, res) => {
      
    // get data from json file
    fs.readFile('./data/employers.json', 'utf8', (err, employers) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(employers);
            res.render('employers/index', {
                title: 'Employer List',
                employers: JSON.parse(employers)
            });
        }
    });  
})

// make public
module.exports = router;