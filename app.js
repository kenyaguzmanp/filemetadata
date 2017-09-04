var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var path = require('path');
var jade = require('jade');
var upload = multer({dest:'uploads/'});

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.render('index');
});

app.post('/upload', upload.single('file'), function(req, res, next){
  return res.json(req.file);
});


app.listen(process.env.PORT || 4000, function(){
    console.log('Server is running');
});