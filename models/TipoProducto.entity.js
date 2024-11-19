const conexion = require("../conexion.js");
const { DataTypes } = require("sequelize");

const TipoProducto = conexion.define(
    "TipoProducto",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: "tipos_productos",
        timestamps: false
    }
);

module.exports = TipoProducto;