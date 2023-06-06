import express from 'express'
// import path from 'path'
import bodyParser from 'body-parser'
// import index from './routes/index'

const app = express()

function runExpressServer() {

  // app.set('view engine', 'ejs')

  app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(express.static(path.join(__dirname, 'public')));
  /* GET the home page. */

  const router = express.Router()
  router.get('/', function (req, res, next) {
    res.json({ status: 'ok1' })
  });

  app.use('/', router)

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    const err = new Error('Not Found')
    res.status(404);
    next(err)
  });

  app.listen(5000, () => console.log(`Express server listening on port 5000`));

}

const RUN_SERVER = process.env.RUN_SERVER ? true : false;
console.log("RUN_SERVER", RUN_SERVER)

// в режиме разработки стартуем сервер отсюда, в продакшене, он стартует с клиента
if (RUN_SERVER) runExpressServer()


// module.exports = app;
export default runExpressServer