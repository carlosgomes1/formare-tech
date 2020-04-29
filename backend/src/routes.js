const { Router } = require('express');

const ConsultorController = require('./Controllers/ConsultorController');
const MensagensController = require('./Controllers/MensagensController');
const FiltroController = require('./Controllers/FiltroController');
const UserController = require('./Controllers/UserController');
const ParticipantesController = require('./Controllers/ParticipantesController');

const routes = Router();

routes.post('/login', ConsultorController.store);
routes.get('/login/:nome', ConsultorController.index);

routes.post('/mensagens', MensagensController.store);
routes.get('/mensagens', MensagensController.index);
routes.delete('/mensagens/:_id', MensagensController.destroy);

routes.get('/filtro', FiltroController.index);

routes.get('/users', UserController.index);

routes.get('/participantes', ParticipantesController.index);

module.exports = routes;
