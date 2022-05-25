const { Router } = require('express');

const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/SessionController');
const ProductController = require('../controllers/ProductController');
const CartController = require('../controllers/CartController');

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Marcos Paulo');
});

//Rotas
routes.post('/users', UserController.createUser); // Rota para criar usuários
routes.get('/users', UserController.getUsers); // Rota para listar os usuários
routes.get('/users/:user_id', UserController.getUserById); // Rota para listar usuários especifico

routes.post('/sessions', SessionController.createSession); // Rota para o Login

routes.get('/products', ProductController.getProducts); // Rota para listar todos os produtos
routes.post('/products/:user_id', ProductController.createProduct); // Rota para criação do produto com usuário especifico
routes.get('/:user_id/products/', ProductController.getUserProducts); // Rota para listar os produtos do usuário especifico
routes.delete(
  '/products/:user_id/:product_id',
  ProductController.deleteProduct
); // Rota para deletar os produtos do usuário especifico
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct); // Rota para atualizar os dados do produto
routes.get('/products/:product_id/', ProductController.getProductById); // Rota para listar o produto especifico

routes.post('/carts/:user_id', CartController.createCart); // Rota adicionar os produtos no carrinho
routes.get('/carts/:user_id', CartController.getUserCart); // Rota para listar os produtos do usuário
routes.get('/carts/:user_id/:cart_id', CartController.getCart); // Rota para pegar o produto no carrinho especifico

module.exports = routes;
