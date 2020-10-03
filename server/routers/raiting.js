const 
    express    = require('express'),
    controller = require('../controllers/raitingController'),
    router     = express.Router();

router.all('/',       controller.actionIndex);
router.all('/change', controller.actionChange);

module.exports = router;