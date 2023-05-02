const bd = require('./../bancoDados/bd.js');


exports.getAll = (req, res) => {
	console.log(req);
	res.status(200).json({
		status: 'success',
		data: 'teste'
	});
};


exports.getAll = (req, res) => {
	console.log('chamei');
	selectAtletas(res);
	//res.status(200).json({
	//	status: 'success',
	//	data: teste
	//});
    //res.status(200).json({
    //    status: 'success',
    //    data: {
    //        alunos: [
    //            {
    //                id: 1,
    //                nome: 'Fulano Silva',
    //                idade: 27
    //            },
     //           {
     //               id: 2,
    //                nome: 'Ciclano Almeida',
    //                idade: 32
    //            }
    //        ]
    //    }
    //});
};

exports.getOne = (req, res) => {
	//console.log(req.params.id);
	selectAtletasId(res,req.params.id);
};

exports.createOne = (req, res) => {
    const alunoId = Math.floor(Math.random() * 10);
    const aluno = Object.assign({ id: alunoId }, req.body);
	console.log(req.body.username);
	console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
	//console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            aluno
        }
    });
};

exports.updateOne = (req, res) => {
    const alunoId = req.params.id;
    const aluno = Object.assign({ id: alunoId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            aluno
        }
    });
};

exports.deleteOne = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

async function selectAtletas(res) {
	const client = await bd.connect();
		client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2',['11111111111',17]).then(retorno => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(retorno.rows)
		//console.log('entrei');
	}).finally(() => client.release())
}

async function selectAtletasId(res,cpf) {
	const client = await bd.connect();
		client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2',[cpf,1]).then(retorno => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(retorno.rows)
		console.log('entrei'+cpf);
	}).finally(() => client.release())
}