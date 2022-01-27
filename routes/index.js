const express = require('express');
const homeController = require('../controllers/home_controller');
// const actionNameController = require('../controllers/action_controller');
const router = express.Router();

console.log('router loaded');

router.get('/', homeController.home);
// router.get('/', actionNameController.actionName);

module.exports = router;