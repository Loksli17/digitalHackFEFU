const
    express = require('express'),
    cors    = require('cors'),
    morgan  = require('morgan');

const 
    config = require('../config');

const 
    app  = express(),
    port = config.app.port || process.env.port;

app.use('/api/index', require('./routers/index.js'));

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.listen(port, () => console.log(`server has been started in port ${3000}`));