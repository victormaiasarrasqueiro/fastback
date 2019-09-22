require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const database = require('./config/Database');

const router = require('./routes/Router');

const app = express();

//helmet ( Protenção HTTP - X-Content-Type-Options , X-DNS-Prefetch-Control, X-Download-Options, X-Frame-Options, X-XSS-Protection)
app.use(helmet());

//Habilita CORS
app.use(cors());

// Desabilitando o cache no servidor 
app.disable('etag');

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

database.connect();

app.use('/api', router);

app.all('*', (req, res) => {
    res.status(404).send({ success: false, code: '404', msg:'Endpoint não localizado.' });
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(500).send({ success: false, code: '500', msg:'Erro Interno.' });
});
  
(async () => {

    app.listen(3000, () => {
        console.log(`Server started on port 3000`);
    });

})();

module.exports = app;
