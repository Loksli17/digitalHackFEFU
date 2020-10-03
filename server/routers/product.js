const 
    express    = require('express'),
    controller = require('../controllers/productController'),
    router     = express.Router();


router.get('/ajax', controller.indexAjax);
router.get('/view', controller.actionView);
router.get('/', 	controller.actionIndex);

module.exports = router;