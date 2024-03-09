const { AppError } = require('../../../src/error/Errors');
const ProdutosRepositories = require('../../repositories/Cadastros/ProdutoRepositories');

class ProdutosServices {
  constructor() {
    this.produtosRepositories = new ProdutosRepositories();
  }

  async create(data) {
    console.log('data', data);
    const funnel = await this.produtosRepositories.create(data).catch(error => {
      throw new AppError(error.message, error.status);
    });
    return { message: 'Produtos criada com sucesso', data: funnel };
  }

  async findAll(user_id) {
    const produtos = await this.produtosRepositories
      .findAll(user_id)
      .catch(error => {
        throw new AppError(error.message, error.status);
      });

    if (!produtos) {
      throw new AppError(`Produtos não encontrados`, 404);
    }

    return {
      message: 'Produtos encontrados',
      data: produtos,
    };
  }

  async findOne(id) {
    const produto = await this.produtosRepositories.findOne(id).catch(error => {
      throw new AppError(error.message, error.status);
    });

    if (!produto || produto === null) {
      throw new AppError('Produtos não encontrada', 404);
    }
    return { message: 'Produtos encontrada', data: produto };
  }

  async update(id, data) {
    const produto = await this.produtosRepositories
      .update(id, data)
      .catch(error => {
        throw new AppError(error.message, error.status);
      });
    return {
      message: 'Produtos atualizada com sucesso',
      data: produto,
    };
  }

  async delete(id) {
    const produto = await this.produtosRepositories.delete(id).catch(error => {
      throw new AppError(error.message, error.status);
    });
    return {
      message: 'Produtos deletada com sucesso',
      data: produto,
    };
  }
}

module.exports = ProdutosServices;
