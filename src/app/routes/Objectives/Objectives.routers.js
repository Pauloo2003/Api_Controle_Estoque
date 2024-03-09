const router = require('express').Router();
const ObjectivesController = require('../../controllers/Objectives/ObjectivesController');

router.post('/create', new ObjectivesController().create);
router.get('/findAll', new ObjectivesController().findAll);
router.get('/findOne/:id', new ObjectivesController().findOne);
router.put('/update/:id', new ObjectivesController().update);
router.delete('/delete/:id', new ObjectivesController().delete);

module.exports = router;
