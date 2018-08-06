'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('survey_prospect', {
    'prospect_id': {
      type: DataTypes.STRING,
    },
    'village': {
      type: DataTypes.STRING,
    },
    'village_id': {
      type: DataTypes.INTEGER,
    },
    'firstname': {
      type: DataTypes.STRING,
    },
    'lastname': {
      type: DataTypes.STRING,
    },
    'telephone': {
      type: DataTypes.STRING,
    },
    'job': {
      type: DataTypes.STRING,
    },
    'situation': {
      type: DataTypes.STRING,
    },
    'foyer': {
      type: DataTypes.STRING,
    },
    'kit': {
      type: DataTypes.STRING,
    },
    'kit_puissance': {
      type: DataTypes.INTEGER,
    },
    'ceet': {
      type: DataTypes.STRING,
    },
    'ceet_tranche': {
      type: DataTypes.STRING,
    },
    'groupe_electrogene': {
      type: DataTypes.STRING,
    },
    'groupe_electrogene_puissance': {
      type: DataTypes.INTEGER,
    },
    'reseau': {
      type: DataTypes.STRING,
    },
    'reseau_puissance': {
      type: DataTypes.INTEGER,
    },
    'telephone_operator': {
      type: DataTypes.STRING,
    },
    'telephone_operator2': {
      type: DataTypes.STRING,
    },
    'telephone_cost': {
      type: DataTypes.INTEGER,
    },
    'longitude': {
      type: DataTypes.STRING,
    },
    'latitude': {
      type: DataTypes.STRING,
    },
    'date': {
      type: DataTypes.DATE,
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
    tableName: 'survey_prospect',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

