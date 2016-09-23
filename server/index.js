import express from 'express';

import { db } from './db';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world!');
});

const port = 3000;
app.listen(port);
console.log(`app listening on port ${port}`);