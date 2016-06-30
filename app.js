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

app.post('/process', function(req, res){

   	var a = req.body.a;
   	var b = req.body.b;
   	var op = req.body.op;
	var c;

	if(op == "Add"){
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