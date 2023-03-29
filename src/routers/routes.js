const express = require('express');
const router = express.Router();
const API_PATH = '/api/v1'

// Get Controllers so we can call them using a router
const HOME_VIEW_CONTROLLER = require('../controllers/views/homeController');
const VIEW_NOT_FOUND_CONTROLLER = require('../controllers/view404Controller');

const PING_API_CONTROLLER = require('../controllers/api/pingController');
const FETCH_API_CONTROLLER = require('../controllers/api/fetchController');
const API_NOT_FOUND_CONTROLLER = require('../controllers/api404Controller');

// Set new router with custom route and controller
// Router documentation: https://expressjs.com/en/guide/routing.html
// **Views**
router.get('/', HOME_VIEW_CONTROLLER);

// **API**
router.get(API_PATH + '/ping', PING_API_CONTROLLER)
router.get(API_PATH + '/fetch/:id?/:fone?/:ftwo?', FETCH_API_CONTROLLER)

// **Error**
router.get(API_PATH + '/*', API_NOT_FOUND_CONTROLLER);
router.get('*', VIEW_NOT_FOUND_CONTROLLER);

module.exports = router;