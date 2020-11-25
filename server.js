const express = require('express');
const app = express();
app.use(express.static('client'));

let things = ['Sue has red hair',
'40 peer reviewed academic publications',
'PhD in Software Engineering',
'Was on Desert Island Discs',
'Saved Bletchley Park'];

let friends =  [ 'Stephen Fry', 'will.i.am'];

 
app.get('/thing/list', function(req, resp){
  resp.json(things);
})

app.listen(8090);