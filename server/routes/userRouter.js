const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddlewere = require('../middlewere/authMiddlewere');

router.post('/registration', userController.registration);
router.post('/login',userController.login);
router.get('/auth',authMiddlewere, userController.check);

module.exports = router;