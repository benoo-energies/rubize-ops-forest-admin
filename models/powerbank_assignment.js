'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('powerbank_assignment', {
    'powerbank_id': {
      type: DataTypes.INTEGER,
    },
    'customer_id': {
      type: DataTypes.INTEGER,
    },
    'entrepreneur_id': {
      type: DataTypes.INTEGER,
    },
    'date_start': {
      type: DataTypes.DATE,
    },
    'date_end': {
      type: DataTypes.DATE,
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
    tableName: 'powerbank_assignment',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

