import express from 'express';
import config from './config';
import { data } from './testData';
import server from './renderers/server';

const app =express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',async (req,res) => {
  const initialContent = await server();
  res.render('index',{...initialContent});
});

app.get('/data', (req,res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running to port ${config.port}`);
});
