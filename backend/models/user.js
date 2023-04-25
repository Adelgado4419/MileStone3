'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dob_month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dob_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    gender:{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    interest:{
      type: DataTypes.STRING,
      allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });
  return User;
};