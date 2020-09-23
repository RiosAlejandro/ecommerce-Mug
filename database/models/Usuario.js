const config = require("../config/config");

module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';

    let cols = {
        idusuarios: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        Usuario: {
            type: dataTypes.STRING,
        },
        clave: {
            type: dataTypes.STRING,
        },
        telefono: {
            type: dataTypes.INTEGER,
        },
        avatar: type.dataTypes.STRING,
    }

    let config = {
        tableName: 'usuarios',
        timestamps: false 
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Producto, {
            as: 'productos',
            through: 'usuarios-productos',
            foreignKey: 'idusuarios',
            otherKey: 'idproductos',
            timestamps: false 
        });
    }

    return Usuario;
}