const bd = require('./../bancoDados/bd.js');


exports.getAll = (req, res) => {
	console.log('chamei');
	selectAtletas2(res);
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
    res.status(200).json({
        status: 'success',
        data: {
            aluno: {
                id: req.params.id,
                nome: 'Fulano Silva',
                idade: 27
            }
        }
    });
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



async function selectAtletas() {
    const client = await bd.connect();
    const sql = 'select * from inscricoes.atleta a where a.cpf = $1';
	const res = await client.query(sql, ['27969938841'])
	console.log(res.rows[0].nome);
    return res.rows;
}

async function selectAtletas2(res) {
	const client = await bd.connect();
	client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2',['11111111111',1]).then(retorno => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(retorno.rows)
		//console.log(retorno.rows);
	}).finally(() => client.end())
}

async function selectAtletas3(res) {
	const client = await bd.connect();
	client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2' ,['27969938841',1], (error, results) => {
    if (error) {
      throw error
    }
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(results.rows)
  })
}