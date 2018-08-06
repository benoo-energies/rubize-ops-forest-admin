'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('entrepreneur', {
    'tagpay_id': {
      type: DataTypes.STRING,
    },
    'pin': {
      type: DataTypes.STRING,
    },
    'type': {
      type: DataTypes.INTEGER,
    },
    'services': {
      type: DataTypes.STRING,
    },
    'equipments': {
      type: DataTypes.STRING,
    },
    'firstname': {
      type: DataTypes.STRING,
    },
    'lastname': {
      type: DataTypes.STRING,
    },
    'telephone': {
      type: DataTypes.STRING,
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
    tableName: 'entrepreneur',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

