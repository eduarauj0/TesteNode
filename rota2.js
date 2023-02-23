const express = require('express');
const alunoController = require('./controller/alunoController');
const cursoController = require('./controller/cursoController');

const app = express();
app.use(express.json());

const alunoRouter = express.Router();

alunoRouter
    .route('/api/aluno')
    .get(alunoController.getAll)
    .post(alunoController.createOne);

alunoRouter
    .route('/api/aluno/:id')
    .get(alunoController.getOne)
    .patch(alunoController.updateOne)
    .delete(alunoController.deleteOne);

const cursoRouter = express.Router();

cursoRouter.route('/api/curso')
    .get(cursoController.getAll)
    .post(cursoController.createOne);

cursoRouter.route('/api/curso/:id')
    .get(cursoController.getOne)
    .patch(cursoController.updateOne)
    .delete(cursoController.deleteOne);

app.use(alunoRouter);
app.use(cursoRouter);

app.listen(8081, () => {
    console.log('our app is running locally 8081');
});