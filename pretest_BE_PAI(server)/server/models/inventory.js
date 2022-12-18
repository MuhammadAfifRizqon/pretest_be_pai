const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    id_inventory: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    detail_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    harga_barang: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "inventory_pkey",
        unique: true,
        fields: [
          { name: "id_inventory" },
        ]
      },
    ]
  });
};
