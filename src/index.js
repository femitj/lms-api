import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from 'morgan';
import router from './routes';

const { NODE_ENV } = process.env;
const app = express();
dotenv.config();
if (NODE_ENV === 'development' || NODE_ENV === 'production') {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to Lms-Center API'
  });
});

app.use('/api/v1', router);

const port = process.env.PORT || 3000;

app.listen(port);

export default app;