'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING,
    uio: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.OrderProducts, {foreignKey: 'uio'})
    Order.belongsTo(models.User, {foreignKey: 'uid'});
  };
  return Order;
};