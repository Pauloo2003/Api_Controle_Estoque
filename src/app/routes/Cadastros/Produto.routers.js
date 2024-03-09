const router = require('express').Router();
const ProdutoController = require('../../controllers/Cadastros/ProdutoController');
const {
  authenticateToken,
} = require('../../../../domain/auth/middlewares/MiddlewaresAuth');

router.post('/create', new ProdutoController().create);

router.get('/findAll', new ProdutoController().findAll);

router.get('/findOne', new ProdutoController().findOne);

router.put('/update/:id', new ProdutoController().update);

router.delete('/delete/:id', new ProdutoController().delete);

module.exports = router;
