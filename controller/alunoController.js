exports.getAll = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            alunos: [
                {
                    id: 1,
                    nome: 'Fulano Silva',
                    idade: 27
                },
                {
                    id: 2,
                    nome: 'Ciclano Almeida',
                    idade: 32
                }
            ]
        }
    });
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