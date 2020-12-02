const express = require('express');
const app = express();
app.use(express.static('client'));
app.use(express.json()); //Parse JSON-encoded bodies

let things = ['Sue has red hair',
'40 peer reviewed academic publications',
'PhD in Software Engineering',
'Was on Desert Island Discs',
'Saved Bletchley Park'];

let friends =  [ 'Stephen Fry', 'will.i.am'];

 
app.get('/thing/list', function(req, resp){
  resp.json(things);
});

app.post('/thing/add', function(req, resp){
  const newthing = req.body.newthing;
  things.push(newthing);
  resp.json(things);
});

app.get('/friend/list', function(req, resp){
  resp.json(friends);
});

module.exports = app;