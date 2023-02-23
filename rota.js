const express = require('express');
const alunoController = require('./controller/alunoController');
const cursoController = require('./controller/cursoController');

const app = express();
app.use(express.json());

app.get('/api/aluno', alunoController.getAll);
app.get('/api/aluno/:id', alunoController.getOne);
app.post('/api/aluno', alunoController.createOne);
app.patch('/api/aluno/:id', alunoController.updateOne);
app.delete('/api/aluno/:id', alunoController.deleteOne);

app.get('/api/curso', cursoController.getAll);
app.get('/api/curso/:id', cursoController.getOne);
app.post('/api/curso', cursoController.createOne);
app.patch('/api/curso/:id', cursoController.updateOne);
app.delete('/api/curso/:id', cursoController.deleteOne);

app.listen(8081, () => {
    console.log('our app is running locally 8081');
});