var http = require('http'),
    url = require('url'),
    bodyParser = require('body-parser'),
    express = require('express'),
	app = express(),
	server = http.createServer(app);

app.engine('.html', require('ejs').renderFile);

app.set('port', process.env.PORT||3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function (req, res) {

	res.render('main.html');
});

app.get('/process', function(req, res){

	var a = parseInt(req.query.a);
   	var b = parseInt(req.query.b);
   	var op = req.query.op;
	var c;
	
	if(parseInt(a)!=isNaN(a)){
		c = 'enter both the numbers';
	}
	else if(op == "Add"){
		c = a + b;
	}
	else if (op == 'Subtract') {
		c = a - b;
	}
	else if (op == 'Multiply') {
		c = a * b;
	}
	else if (op == 'Divide') {
		if(b != 0){
			c = a / b;
		}
		else 
			c = 'b should not be 0';
	}
	res.send(c.toString());
});

server.listen(app.get('port'),function () {
	console.log(' server is listening on port ' + app.get('port'));
});