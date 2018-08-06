'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('order', {
    'customer_id': {
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
    tableName: 'order',
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
