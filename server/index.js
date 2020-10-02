const
    express    = require('express'),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    morgan     = require('morgan');

const 
    config = require('../config');

    console.log(config);


const 
    app  = express(),
    port = config.app.port || process.env;

app.use('/api/index', require('./routers/index.js'));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.listen(port, () => console.log('server has been started in port 3000'));