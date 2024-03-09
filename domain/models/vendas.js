'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vendas.belongsTo(models.User, { foreignKey: 'user_id', as: 'user2' });
      models.User.hasMany(vendas, { foreignKey: 'user_id', as: 'customers2' });
    }
  }
  vendas.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        type: DataTypes.INTEGER,
      },
      items: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'vendas',
    },
  );
  return vendas;
};
