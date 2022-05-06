import express from 'express'
import apiController from '../controllers/apiController.js'
import todoController from '../controllers/todoController.js';
import authorize from '../middleware/authMiddleware.js';

const route = express.Router()


route.post('/register', apiController.register);
route.post('/login', apiController.login);
route.get('/getAlldata', authorize, apiController.getAllData)
route.get('/', authorize ,apiController.getData);

route.get('/todo', authorize, todoController.getAllTodo);
route.post('/todo', authorize, todoController.addTodo);
route.put('/todo/:id', authorize, todoController.updateTodo);
route.delete('/todo/:id', authorize, todoController.deleteTodo);

export default route