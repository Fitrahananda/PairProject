'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    email: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg : 'Please input Email'}
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg : 'Please input password'}
      }
    },
    role: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {msg : 'Please choose role'}
      }
    }
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};