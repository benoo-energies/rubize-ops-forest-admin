'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('entrepreneur_product', {
    'service_type_id': {
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
    'price_fcfa': {
      type: DataTypes.DOUBLE,
    },
    'unity': {
      type: DataTypes.STRING,
    },
    'unity_small': {
      type: DataTypes.STRING,
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
    tableName: 'entrepreneur_product',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

