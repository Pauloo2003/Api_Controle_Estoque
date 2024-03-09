const { AppError } = require('../../../src/error/Errors');
const ObjectivesRepositories = require('../../repositories/Objectives/ObjectivesRepositories');

class ObjectivesServices {
  constructor() {
    this.objectivesRepositories = new ObjectivesRepositories();
  }

  async create(data) {
    const objective = await this.objectivesRepositories
      .create(data)
      .catch(error => {
        throw new AppError(error.message, error.status);
      });
    return { message: 'Objective criada com sucesso', data: objective };
  }

  async findAll() {
    const objectives = await this.objectivesRepositories
      .findAll()
      .catch(error => {
        throw new AppError(error.message, error.status);
      });

    if (!objectives) {
      throw new AppError(`Objectives não encontradas`, 404);
    }
    return {
      message: 'Objectives encontradas',
      data: objectives,
    };
  }

  async findOne(id) {
    const objective = await this.objectivesRepositories
      .findOne(id)
      .catch(error => {
        throw new AppError(error.message, error.status);
      });

    if (!objective || objective === null) {
      throw new AppError('Objective não encontrada', 404);
    }
    return { message: 'Objective encontrada', data: objective };
  }

  async update(id, data) {
    const objective = await this.objectivesRepositories
      .update(id, data)
      .catch(error => {
        throw new AppError(error.message, error.status);
      });

    return {
      message: 'Objective atualizada com sucesso',
      data: objective,
    };
  }

  async delete(id) {
    const objective = await this.objectivesRepositories
      .delete(id)
      .catch(error => {
        throw new AppError(error.message, error.status);
      });

    return {
      message: 'Objective deletada com sucesso',
      data: objective,
    };
  }
}

module.exports = ObjectivesServices;
