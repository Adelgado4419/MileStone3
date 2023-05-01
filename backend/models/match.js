'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
  }
  Match.init({
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
    modelName: 'Match',
    tableName: 'matches',
  });
  return Match;
};