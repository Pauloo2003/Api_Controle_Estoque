const { log } = require('handlebars');
const { produtos } = require('../../models');

class ProdutoRepositories {
  constructor() {
    this.model = produtos;
}
  async create(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const customer = await produtos.create(body);
        resolve(customer);
      } catch (error) {
        reject(error);
      }
    });
  }
  async findAll(user_id) {
    console.log('REPOSITORIE', user_id);
    return new Promise(async (resolve, reject) => {
      try {
        const produtos = await this.model.findAll();
        resolve(produtos);
      } catch (error) {
        reject(error);
      }
    });
  }
  async findOne(idOrName = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let queryOptions = {};
        if (idOrName) {
          if (isNaN(idOrName)) {
            queryOptions = {
              where: { name: idOrName },
            };
          } else {
            queryOptions = {
              where: { id: idOrName },
            };
          }
        }

        const consumer = await Produto.findOne(queryOptions);
        resolve(consumer);
      } catch (error) {
        reject(error);
      }
    });
  }
  async update(user_id, body) {
    return new Promise(async (resolve, reject) => {
      try {
        await Produto.update(body, {
          where: {
            user_id,
          },
        });

        const customerUpdated = await Produto.findByUserId(user_id);
        resolve(customerUpdated);
      } catch (error) {
        reject(error);
      }
    });
  }
  async delete(id) {
    return new Promise(async (resolve, reject) => {
      try {
        await Produto.destroy({
          where: {
            id,
          },
        });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findByUserId(user_id) {
    return new Promise(async (resolve, reject) => {
      try {
        const customer = await Produto.findOne({
          where: {
            user_id,
          },
        });
        resolve(customer);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = ProdutoRepositories;
