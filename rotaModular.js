const express = require('express');
const alunoRouter = require('./rotas/alunoRoutes');
const cursoRouter = require('./rotas/cursoRoutes');
const loginRota = require('./rotas/loginRota');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const auth = require('./auth/autenticacao.js');


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {
	//console.log('filtro');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	//res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	//

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Headers');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(alunoRouter);
app.use(cursoRouter);
app.use(loginRota);

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "public/html/index.htm" );
})

app.get('/hello',auth.verifyJWT, function (req, res) {
    res.send('Hello World');
})

app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});


app.listen(8081, () => {
    console.log('our app is running locally...');
});