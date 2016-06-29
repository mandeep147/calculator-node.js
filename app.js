var http = require('http'),
    url = require('url'),
    bodyParser = require('body-parser');
    express = require('express');

var app = express();
var server = http.createServer(app);

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
/*response = {
       a : req.query.a,
       b : req.query.b
   };
  */
   var a = parseInt(req.query.a);
   var b = parseInt(req.query.b);

//   var c = parseInt(a) + parseInt(b);
  var c;
	//console.log(req);

	if(req.query.hasOwnProperty('Add')){
		c = a + b;
	}
	else if (req.query.hasOwnProperty('Subtract')) {
		c = a - b;
	}
	else if (req.query.hasOwnProperty('Multiply')) {
		c = a * b;
	}
	else if (req.query.hasOwnProperty('Divide')) {
		if(b != 0){
			c = a / b;
		}
		else 
			c = 'b should not be 0';
	}
  // console.log(response);
   //res.end(JSON.stringify(response));
	//res.render('add.html');
	res.send(c.toString());

});

server.listen(app.get('port'),function () {
	console.log(' server is listening on port ' + app.get('port'));
 	
});