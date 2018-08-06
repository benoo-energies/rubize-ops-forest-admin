'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('provider_order', {
    'provider_id': {
      type: DataTypes.INTEGER,
    },
    'entrepreneur_id': {
      type: DataTypes.INTEGER,
    },
    'total': {
      type: DataTypes.DOUBLE,
    },
    'comission': {
      type: DataTypes.DOUBLE,
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
    tableName: 'provider_order',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

