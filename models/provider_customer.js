'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('provider_customer', {
    'provider_id': {
      type: DataTypes.INTEGER,
    },
    'entrepreneur_id': {
      type: DataTypes.INTEGER,
    },
    'package': {
      type: DataTypes.INTEGER,
    },
    'kit': {
      type: DataTypes.STRING,
    },
    'paid': {
      type: DataTypes.INTEGER,
    },
    'wh_day': {
      type: DataTypes.INTEGER,
    },
    'wh_cost': {
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
    tableName: 'provider_customer',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

