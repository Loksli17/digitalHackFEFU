const 
    express    = require('express'),
    controller = require('../controllers/raitingController'),
    router     = express.Router();

router.all('/', controller.actionIndex);

module.exports = router;