'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('survey_result', {
    'survey_id': {
      type: DataTypes.INTEGER,
    },
    'survey_prospect_id': {
      type: DataTypes.INTEGER,
    },
    'besoin_actuel': {
      type: DataTypes.INTEGER,
    },
    'besoin_futur': {
      type: DataTypes.INTEGER,
    },
    'cout_actuel': {
      type: DataTypes.INTEGER,
    },
    'cout_futur': {
      type: DataTypes.INTEGER,
    },
    'status': {
      type: DataTypes.INTEGER,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'survey_result',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

