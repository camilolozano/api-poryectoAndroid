'use strict';

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define(
    'contacts',
    {
      idUser: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      }
    }
  );
  return user;
};
