import express from 'express';
import { router } from './routes/loginRouters';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

app.listen(3000, () => {
    console.log('App run on port', 3000)
})
