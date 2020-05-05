const express = require('express');
const { getUserList, getUser } = require('./../controllers/userController');

const router = express.Router();
router.route('/').get(getUserList);
router.route('/:id').get(getUser);

module.exports = router;
