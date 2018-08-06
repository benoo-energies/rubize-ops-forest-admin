'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('entrepreneur_order', {
    'total': {
      type: DataTypes.DOUBLE,
    },
    'information': {
      type: DataTypes.STRING,
    },
    'paid': {
      type: DataTypes.INTEGER,
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
    tableName: 'entrepreneur_order',
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

