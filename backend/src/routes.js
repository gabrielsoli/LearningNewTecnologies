/**
 * Metodos http
 * GET: Buscar informacao backend
 * POST: Criar uma informacao no backend
 * PUT: Alterar um informacao
 * DELETE: Deletar uma informacao
 */

/**
 * Tipos de parametros:
 * 
 * Query: parametros nomeado e enviados na rota apos o '?'
 * Route: Parametro para identificar recursos
 * Request Body: corpo da requisicao, usado para criar ou aterar recursos
 */

const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions',SessionController.create);

//Criando e listando Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//Criando e listando Incidentes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

//Deletando incidentes
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;