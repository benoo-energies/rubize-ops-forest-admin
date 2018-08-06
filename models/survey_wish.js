'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('survey_wish', {
    'survey_id': {
      type: DataTypes.INTEGER,
    },
    'survey_prospect_id': {
      type: DataTypes.INTEGER,
    },
    'wish_ampoule': {
      type: DataTypes.INTEGER,
    },
    'wish_ventilateur': {
      type: DataTypes.INTEGER,
    },
    'wish_tel': {
      type: DataTypes.INTEGER,
    },
    'wish_clim': {
      type: DataTypes.INTEGER,
    },
    'wish_radio': {
      type: DataTypes.INTEGER,
    },
    'wish_machine_laver': {
      type: DataTypes.INTEGER,
    },
    'wish_frigo': {
      type: DataTypes.INTEGER,
    },
    'wish_congelateur': {
      type: DataTypes.INTEGER,
    },
    'wish_tv': {
      type: DataTypes.INTEGER,
    },
    'wish_dvd': {
      type: DataTypes.INTEGER,
    },
    'wish_tondeuse': {
      type: DataTypes.INTEGER,
    },
    'wish_machine_broder': {
      type: DataTypes.INTEGER,
    },
    'wish_machine_pleinte': {
      type: DataTypes.INTEGER,
    },
    'wish_machine_coudre': {
      type: DataTypes.INTEGER,
    },
    'wish_scie_circulaire': {
      type: DataTypes.INTEGER,
    },
    'wish_scie_sauteuse': {
      type: DataTypes.INTEGER,
    },
    'wish_toupie': {
      type: DataTypes.INTEGER,
    },
    'wish_raboteuse': {
      type: DataTypes.INTEGER,
    },
    'wish_fraise': {
      type: DataTypes.INTEGER,
    },
    'wish_moulin': {
      type: DataTypes.INTEGER,
    },
    'wish_arc_souder': {
      type: DataTypes.INTEGER,
    },
    'wish_ponceuse': {
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
    tableName: 'survey_wish',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

