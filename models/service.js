'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('service', {
    'title': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'picture': {
      type: DataTypes.STRING,
    },
    'type': {
      type: DataTypes.INTEGER,
    },
    'price_fcfa': {
      type: DataTypes.DOUBLE,
    },
    'price_euro': {
      type: DataTypes.DOUBLE,
    },
    'unity': {
      type: DataTypes.STRING,
    },
    'unity_small': {
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
    tableName: 'service',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.service_type, {
      foreignKey: 'service_type_id',
      
      as: '_service_type_id',
    });
    
  };

  return Model;
};

