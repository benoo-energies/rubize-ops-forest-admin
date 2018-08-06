'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('password_resets', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'token': {
      type: DataTypes.INTEGER,
    },
    'created_at': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'password_resets',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

