/* Default port used if nothing is specified in cmd arguments */
var DEFAULT_PORT = 3000;
var isProduction = (process.env.NODE_ENV === 'production') ? true : false;

/*
 * Basic Dependencies
 */
var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

/*
 * Used for setting flash cookies
 */
//var flash = require('connect-flash');

/*
 * Create the app
 */
var app = express();

/* Tell express to use forwarded ip address */
app.set('trust proxy', true);

/* Configure the port to use */
app.set('port', process.env.PORT || DEFAULT_PORT);

/* Configure views directory */
app.set('views', __dirname + '/public/assets/views');

/*
 * Handlebars templating engine
 */
var exphbs = require('express-handlebars');
var hbs = exphbs.create({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: app.get('views') + '/layouts',
	partialsDir: app.get('views') + '/partials'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.enable('view cache');

/*
 * Static
 */
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*
 * Set up environment
 */
var environment = require('./app/environment');
environment.initialize(app);


/*
 * Set up routes
 */
var router = require('./app/router');
router.initialize(app);



http.createServer(app).listen(app.get('port'), function() {
	console.log('Server listening on port: ' + app.get('port') + ' ...');
});
