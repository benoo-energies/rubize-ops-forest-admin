'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('entrepreneur_price', {
    'entrepreneur_id': {
      type: DataTypes.INTEGER,
    },
    'service_id': {
      type: DataTypes.INTEGER,
    },
    'price_fcfa': {
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
    tableName: 'entrepreneur_price',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

