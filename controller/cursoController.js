exports.getAll = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            alunos: [
                {
                    id: 1,
                    nome: 'Curso de Node.js'
                },
                {
                    id: 2,
                    nome: 'Curso de MongoDB'
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
                nome: 'Curso de Node.js'
            }
        }
    });
};

exports.createOne = (req, res) => {
    const cursoId = Math.floor(Math.random() * 10);
    const curso = Object.assign({ id: cursoId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            curso
        }
    });
};

exports.updateOne = (req, res) => {
    const cursoId = req.params.id;
    const curso = Object.assign({ id: cursoId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            curso
        }
    });
};

exports.deleteOne = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};