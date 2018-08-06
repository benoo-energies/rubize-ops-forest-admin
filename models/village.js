'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('village', {
    'name': {
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
    tableName: 'village',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

