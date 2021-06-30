const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/search/:id', mainController.getDetail);
router.get('/category', mainController.getCategoryPage);
router.get('/category/:name', mainController.SpecialCategoryPage);
module.exports = router;