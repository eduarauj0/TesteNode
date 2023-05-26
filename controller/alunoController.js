const bd = require('./../bancoDados/bd.js');
var fs = require('fs'), request = require('request');


//exports.getAll = (req, res) => {
	//console.log(req);
	//res.status(200).json({
	//	status: 'success',
	//	data: 'teste'
	//});
//};

exports.getImage = (req, res) => {
	fs.readFile('/node/TesteNode/google.png', function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");    
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
    });
};

exports.getAll = (req, res) => {
	//console.log('chamei');
	//baixarImagemParaDentroDoProjeto('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
		//console.log('done');
	//});
	selectAtletas(res);
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
		res.status(200).json(retorno.rows)
		//console.log('entrei');
	}).finally(() => client.release())
}

async function selectAtletasId(res,cpf) {
	const client = await bd.connect();
		client.query('select * from inscricoes.atleta a where a.cpf = $1 LIMIT $2',[cpf,1]).then(retorno => {
		res.status(200).json(retorno.rows)
		console.log('entrei'+cpf);
	}).finally(() => client.release())
}

var baixarImagemParaDentroDoProjeto = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};