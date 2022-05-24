const User = require('../../models/User');

const UserController = {
  // Função para criação do usuário
  async createUser(req, res) {
    const bodyData = req.body;

    try {
      const newUser = await User.create(bodyData);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Função para pegar os usuários
  async getUsers(req, res) {
    const paramsData = req.params;

    try {
      const users = await User.find(paramsData);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  // Função para listar o usuário especifico
  async getUserById(req, res) {
    const { user_id } = req.params;

    try {
      const user = await User.findById(user_id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = UserController;
