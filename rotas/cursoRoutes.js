const express = require('express');
const cursoController = require('./../controller/cursoController');

const router = express.Router();

router
    .route('/api/curso')
    .get(cursoController.getAll)
    .post(cursoController.createOne);

router
    .route('/api/curso/:id')
    .get(cursoController.getOne)
    .patch(cursoController.updateOne)
    .delete(cursoController.deleteOne);

module.exports = router;