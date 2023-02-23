const express = require('express');
const alunoController = require('./../controller/alunoController');

const router = express.Router();

router
    .route('/api/aluno')
    .get(alunoController.getAll)
    .post(alunoController.createOne);

router
    .route('/api/aluno/:id')
    .get(alunoController.getOne)
    .patch(alunoController.updateOne)
    .delete(alunoController.deleteOne);

module.exports = router;