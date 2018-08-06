'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('customer', {
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
    'job': {
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
    tableName: 'customer',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.entrepreneur, {
      foreignKey: 'entrepreneur_id',
      
      as: '_entrepreneur_id',
    });
    
  };

  return Model;
};

