'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {

    static associate(models) {
      // Define the association for produtos and User
      // Produto.belongsTo(models.User, { foreignKey: 'user_id', as: 'user1' });
      // models.User.hasMany(Produto, {
       //  foreignKey: 'user_id',
       //  as: 'customers1',
      // });
    }
  }
  produtos.init(
    {
      bar_code: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      purchase_price: {
        type: DataTypes.STRING,
      },
      sale_price: {
        type: DataTypes.STRING,
      },
      stock: {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'produtos',
      tableName: 'produtos',
    },
  );
  return produtos;
};
