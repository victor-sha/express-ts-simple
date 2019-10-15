import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {router} from './routes/loginRouters';
import { AppRouter } from './AppRouter'

import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('App run on port', 3000)
});
