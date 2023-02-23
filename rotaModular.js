const express = require('express');
const alunoRouter = require('./rotas/alunoRoutes');
const cursoRouter = require('./rotas/cursoRoutes');

const app = express();
app.use(express.json());

app.use(alunoRouter);
app.use(cursoRouter);

app.listen(8081, () => {
    console.log('our app is running locally...');
});