'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('entrepreneur_order_detail', {
    'quantity': {
      type: DataTypes.INTEGER,
    },
    'unit_price_fcfa': {
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
    tableName: 'entrepreneur_order_detail',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.entrepreneur, {
      foreignKey: 'entrepreneur_id',
      
      as: '_entrepreneur_id',
    });
    
    Model.belongsTo(models.entrepreneur_order, {
      foreignKey: 'entrepreneur_order_id',
      
      as: '_entrepreneur_order_id',
    });
    
    Model.belongsTo(models.entrepreneur_product, {
      foreignKey: 'entrepreneur_product_id',
      
      as: '_entrepreneur_product_id',
    });
    
  };

  return Model;
};

