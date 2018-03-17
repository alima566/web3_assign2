import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';

import Routes from './routes';

module.exports = function (app) {
  //CORS Fix
  app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://client:react1234@ds141175.mlab.com:41175/comp4513-asg2');

  SourceMapSupport.install();

  app.get('/', (req, res) => res.end('API Initialized'));
  app.use('/api', Routes);

  app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
  });
};
