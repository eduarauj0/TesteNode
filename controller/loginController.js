const bd = require('./../bancoDados/bd.js');
const jwt = require('jsonwebtoken');

exports.validar = (req, res) => {
	
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization ,Accept');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials',true);
	console.log(req);
	 //esse teste abaixo deve ser feito no seu banco de dados
	 
    if(req.body.login === 'eduardo' && req.body.senha === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
};

async function validar(res) {
	const client = await bd.connect();
	client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2',['11111111111',1]).then(retorno => {

		res.status(200).json(retorno.rows)
		//console.log(retorno.rows);
	}).finally(() => client.end())
}