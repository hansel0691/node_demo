const express = require('express');
const router = express.Router();

const user_router = require('./user_controller');
const home_router = require('./home_controller');
const file_router = require('./files_controller')

// ! Configure and export routes for the app
router.use(home_router);
router.use(user_router);
router.use(file_router);

module.exports = router;