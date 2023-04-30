'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
    }
  }
  Chat.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    from_userId: DataTypes.INTEGER,
    allowNull: false,

    to_userId: DataTypes.INTEGER,
    allowNull: false,

    message: DataTypes.STRING,
    allowNull: false
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};
