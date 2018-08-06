'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('users', {
    'name': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'password': {
      type: DataTypes.STRING,
    },
    'role': {
      type: DataTypes.INTEGER,
    },
    'status': {
      type: DataTypes.INTEGER,
    },
    'remember_token': {
      type: DataTypes.STRING,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'users',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

