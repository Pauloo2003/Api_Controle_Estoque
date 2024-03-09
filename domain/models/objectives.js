'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objectives extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Objectives.belongsTo(models.Languages, {
            foreignKey: 'language_id',
            as: 'language',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        models.Languages.hasMany(models.Objectives, {
            foreignKey: 'language_id',
            as: 'objectives',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
    }
  }
  Objectives.init({
    objective_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    objective: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    language_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'Languages',
        key: 'language_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Objectives',
  });
  return Objectives;
};
