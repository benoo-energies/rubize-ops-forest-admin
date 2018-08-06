'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('service_type', {
    'equipment_id': {
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
    tableName: 'service_type',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

