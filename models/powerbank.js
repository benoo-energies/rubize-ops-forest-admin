'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('powerbank', {
    'provider_id': {
      type: DataTypes.INTEGER,
    },
    'entrepreneur_id': {
      type: DataTypes.INTEGER,
    },
    'activity': {
      type: DataTypes.INTEGER,
    },
    'longitude': {
      type: DataTypes.STRING,
    },
    'latitude': {
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
    tableName: 'powerbank',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

