const express = require('express');
const alunoRouter = require('./rotas/alunoRoutes');
const cursoRouter = require('./rotas/cursoRoutes');

const app = express();
app.use(express.json());

app.use(alunoRouter);
app.use(cursoRouter);

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "public/html/index.htm" );
})

app.listen(8081, () => {
    console.log('our app is running locally...');
});