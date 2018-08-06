'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('equipment', {
    'title': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'picture': {
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
    tableName: 'equipment',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

