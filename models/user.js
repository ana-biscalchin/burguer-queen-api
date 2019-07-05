'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Order, {foreignKey: 'uid'})
  };
  // User.create({firstName: "" , lastName:'Silva',email: 'luiza@ana.br'});
  return User;
};


