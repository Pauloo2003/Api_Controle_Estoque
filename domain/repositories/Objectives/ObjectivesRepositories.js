const { Objectives } = require('../../models');

class ObjectivesRepositories {
  async findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const objectives = await Objectives.findAll();
        resolve(objectives);
      } catch (error) {
        reject(error);
      }
    });
  }
  async findOne(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const objective = await Objectives.findOne({ where: { id: id } });
        resolve(objective);
      } catch (error) {
        reject(error);
      }
    });
  }
  async update(id, data) {
    return new Promise(async (resolve, reject) => {
      try {
        await Objectives.update(data, {
          where: { id: id },
        });
        const objectiveUpdated = await Objectives.findOne({
          where: { id: id },
        });
        resolve(objectiveUpdated);
      } catch (error) {
        reject(error);
      }
    });
  }
  async delete(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const objective = await Objectives.destroy({ where: { id: id } });
        resolve(objective);
      } catch (error) {
        reject(error);
      }
    });
  }
  async create(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const objective = await Objectives.create(body);
        resolve(objective);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = ObjectivesRepositories;
