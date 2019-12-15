var express = require('express');
var app = express();
var port = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));