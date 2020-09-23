module.exports = function(sequelize, dataTypes) {

    let alias = 'CategoriaProducto';

    let cols = {
        idcategoriaProductos:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'categoria-productos',
        timestamps: false
    }

    let CategoriaProducto = sequelize.define(alias, cols, config);

    CategoriaProducto.associate = function(models){
        CategoriaProducto.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoriaProductos'
        });
    }

    return CategoriaProducto;
}