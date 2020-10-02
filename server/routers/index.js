const 
    express    = require('express'),
    controller = require('../controllers/indexController'),
    router     = express.Router();

router.get('/', controller.actionIndex);

module.exports = router;