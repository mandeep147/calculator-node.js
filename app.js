var http = require('http'),
    url = require('url'),
    express = require('express');

var app = express();
var server = http.createServer(app);

app.engine('.html', require('ejs').renderFile);

app.set('port', process.env.PORT||3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function (req, res) {
	res.render('main.html');
});

app.get('/add', function(req, res){
	res.render('add.html');
})

app.get('/div', function(req, res){
	res.render('div.html');
})

app.get('/mult', function(req, res){
	res.render('mult.html');
})

app.get('/sub', function(req, res){
	res.render('sub.html');
})

server.listen(app.get('port'),function () {
	console.log(' server is listening on port ' + app.get('port'));
});