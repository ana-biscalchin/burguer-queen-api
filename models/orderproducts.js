'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    uip: DataTypes.INTEGER,
    uio: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Order, {foreignKey: 'uio'})
    OrderProducts.belongsTo(models.Products, {foreignKey: 'uip'})
  };
  return OrderProducts;
};