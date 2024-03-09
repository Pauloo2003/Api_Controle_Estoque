const ProdutoService = require('../../../../domain/services/Cadastros/ProdutoServices');

class ProdutoController {
  constructor() {
    this.produtoService = new ProdutoService();
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const produto = await this.produtoService.create(request.body);
    return response.status(201).json(produto);
  }

  async findAll(request, response) {
    console.log(request.user);
    const produtos = await this.produtoService.findAll(request.user.userId);
    response.status(200).json(produtos);
  }

  async findOne(request, response) {
    const { produtoId } = request.produto;

    const produto = await this.produtoService.findOne(produtoId);
    return response.status(200).json(produto);
  }

  async update(request, response) {
    const { id } = request.params;
    const produto = await this.produtoService.update(id, request.body);
    return response.status(200).json(produto);
  }

  async delete(request, response) {
    const { id } = request.params;
    const produto = await this.produtoService.delete(id);
    return response.status(200).json(produto);
  }
}

module.exports = ProdutoController;
