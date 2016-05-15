var express = require('express'),
    exphbs = require('express-handlebars'),
    path = require('path');

var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));


// Set up handlebars as view engine and change view folder
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('index');
});


app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port'));
});
