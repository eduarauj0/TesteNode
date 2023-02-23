var express = require('express');
var app = express();

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://masterkey:postgres@sescserv39:5432/sescprweb')

app.get('/', function(req, res) {
	db.one('select * from inscricoes.atleta a where a.cpf = $1', '27969938841')
  .then((data) => {
    console.log('DATA:', data.value)
	res.send(data);
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
  
});

app.listen(8081, function() {
  console.log('App de Exemplo escutando na porta 8081!');
});
