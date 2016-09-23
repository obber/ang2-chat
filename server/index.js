import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './routers';

const app = express();

app.use(bodyParser.json());

app.use(rootRouter);

const port = 3000;
app.listen(port);
console.log(`app listening on port ${port}`);