const express = require('express');
const homeController = require('../controllers/home_controller');

const router = express.Router();

console.log('Router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

// For any futher routes, access from here
// router.use('/routerName', require('./routerFile));

module.exports = router;