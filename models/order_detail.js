'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('order_detail', {
    'customer_id': {
      type: DataTypes.INTEGER,
    },
    'quantity': {
      type: DataTypes.INTEGER,
    },
    'unit_price_fcfa': {
      type: DataTypes.DOUBLE,
    },
    'status': {
      type: DataTypes.INTEGER,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'order_detail',
    underscored: true,


  });

  Model.associate = (models) => {
    Model.belongsTo(models.entrepreneur, {
      foreignKey: 'entrepreneur_id',

      as: '_entrepreneur_id',
    });

    // Model.belongsTo(models.service, {
    //   foreignKey: 'service_id',
    //
    //   as: '_service_id',
    // });

    Model.belongsTo(models.order, {
      foreignKey: 'order_id',

      as: '_order_id',
    });

  };

  return Model;
};
