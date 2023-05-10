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

app.use(alunoRouter);
app.use(cursoRouter);
app.use(loginRota);

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "public/html/index.htm" );
})

app.get('/hello',auth.verifyJWT, function (req, res) {
	console.log("passei");
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World');
})

app.all('*',function (req,res,next) {
  console.log(req.header("Authorization"));
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization ,Accept');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials',true);
  res.setHeader('Access-Control-Expose-Headers','Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

  console.log("inicio");
  next();
});

app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});


app.listen(8081, () => {
    console.log('our app is running locally...');
});