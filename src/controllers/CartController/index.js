const Cart = require('../../models/Cart');

const CartController = {
  // Função para criação do carrinho
  async createCart(req, res) {
    const bodyData = req.body;
    const { user_id } = req.params;

    try {
      const createCart = await Cart.create({ ...bodyData, username: user_id });
      return res.status(200).json(createCart);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Função para listar os produtos do usuário no carrinho
  async getUserCart(req, res) {
    const { user_id } = req.params;

    try {
      const userCart = await Cart.find({ username: user_id })
        .populate('username')
        .populate('products');
      return res.status(200).json(userCart);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Função para listar um produto especifico do carrinho
  async getCart(req, res) {
    const { user_id, cart_id } = req.params;

    try {
      const cart = await Cart.findById(cart_id).populate('products');
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

module.exports = CartController;
