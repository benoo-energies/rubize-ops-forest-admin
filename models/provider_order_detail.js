'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('provider_order_detail', {
    'provider_order_id': {
      type: DataTypes.INTEGER,
    },
    'provider_id': {
      type: DataTypes.INTEGER,
    },
    'entrepreneur_id': {
      type: DataTypes.INTEGER,
    },
    'provider_product_id': {
      type: DataTypes.INTEGER,
    },
    'quantity': {
      type: DataTypes.INTEGER,
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
    tableName: 'provider_order_detail',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

