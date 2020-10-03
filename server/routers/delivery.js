const 
    express    = require('express'),
    controller = require('../controllers/deliveryController'),
    router     = express.Router();


router.all('/', controller.actionIndex);

module.exports = router;