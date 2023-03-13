const bd = require('./../bancoDados/bd.js');

exports.validar = (req, res) => {
	res.status(200).json({
        status: 'success',
        data: {
            aluno: {
                login: 'true'
            }
        }
    });
};

async function validar(res) {
	const client = await bd.connect();
	client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2',['11111111111',1]).then(retorno => {

		res.status(200).json(retorno.rows)
		//console.log(retorno.rows);
	}).finally(() => client.end())
}