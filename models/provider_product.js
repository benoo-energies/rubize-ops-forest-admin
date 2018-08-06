'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('provider_product', {
    'provider_id': {
      type: DataTypes.INTEGER,
    },
    'title': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'picture': {
      type: DataTypes.STRING,
    },
    'type': {
      type: DataTypes.INTEGER,
    },
    'price_fcfa': {
      type: DataTypes.DOUBLE,
    },
    'price_euro': {
      type: DataTypes.DOUBLE,
    },
    'unity': {
      type: DataTypes.STRING,
    },
    'unity_small': {
      type: DataTypes.STRING,
    },
    'stock': {
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
    tableName: 'provider_product',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

