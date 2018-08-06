'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('survey_dispo', {
    'survey_id': {
      type: DataTypes.INTEGER,
    },
    'survey_prospect_id': {
      type: DataTypes.INTEGER,
    },
    'dispo_lampe': {
      type: DataTypes.INTEGER,
    },
    'dispo_torche': {
      type: DataTypes.INTEGER,
    },
    'dispo_bougie': {
      type: DataTypes.INTEGER,
    },
    'dispo_ampoule': {
      type: DataTypes.INTEGER,
    },
    'dispo_ventilateur': {
      type: DataTypes.INTEGER,
    },
    'dispo_tel': {
      type: DataTypes.INTEGER,
    },
    'dispo_clim': {
      type: DataTypes.INTEGER,
    },
    'dispo_radio': {
      type: DataTypes.INTEGER,
    },
    'dispo_machine_laver': {
      type: DataTypes.INTEGER,
    },
    'dispo_frigo': {
      type: DataTypes.INTEGER,
    },
    'dispo_congelateur': {
      type: DataTypes.INTEGER,
    },
    'dispo_tv': {
      type: DataTypes.INTEGER,
    },
    'dispo_dvd': {
      type: DataTypes.INTEGER,
    },
    'dispo_tondeuse': {
      type: DataTypes.INTEGER,
    },
    'dispo_machine_broder': {
      type: DataTypes.INTEGER,
    },
    'dispo_machine_pleinte': {
      type: DataTypes.INTEGER,
    },
    'dispo_machine_coudre': {
      type: DataTypes.INTEGER,
    },
    'dispo_scie_circulaire': {
      type: DataTypes.INTEGER,
    },
    'dispo_scie_sauteuse': {
      type: DataTypes.INTEGER,
    },
    'dispo_toupie': {
      type: DataTypes.INTEGER,
    },
    'dispo_raboteuse': {
      type: DataTypes.INTEGER,
    },
    'dispo_fraise': {
      type: DataTypes.INTEGER,
    },
    'dispo_moulin': {
      type: DataTypes.INTEGER,
    },
    'dispo_arc_souder': {
      type: DataTypes.INTEGER,
    },
    'dispo_ponceuse': {
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
    tableName: 'survey_dispo',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

