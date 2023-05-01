'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    static associate(models) {
      this.belongsTo(user, {foreignKey: 'id', as: 'user_id'})
    }
  }
  matches.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matchid: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'matches',
  });
  return matches;
};