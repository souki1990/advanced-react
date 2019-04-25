import express from 'express';
const port =require( './config');
import { data } from './testData';
import server from './renderers/server';

const app =express();
const initialContent=server();
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/', (req,res) => {
  res.render('index',{initialContent:initialContent});
});

app.get('/data', (req,res) => {
  res.send(data);
});
app.listen(port, function listenHandler() {
  console.info(`Running to port ${port}`);
});
