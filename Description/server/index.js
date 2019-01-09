const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./db/index.js');
const cors = require('cors');

const app = express();
app.set('port', 3003);
app.use(parser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/turash/description/:id', (req, res) => {
  const { params: { id } } = req;
  db.getData(id, (data) => {
    res.send(data);
  });
});

app.listen(app.get('port'), () => {
  console.log('Listening on port ', app.get('port'));
});
