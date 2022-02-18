'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Book.hasOne(models.User, { as: 'user', foreignKey: 'id' })
    }
  }
  Book.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
