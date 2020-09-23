module.exports = function(sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        idproductos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrerment: true
        },
        nombre: {
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        color: {
            type: dataTypes.STRING,
        },
        precio: {
            type: dataTypes.INTEGER,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        categoriaProductos: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.CategoriaProducto, {
            as: 'categoria-productos',
            foreignKey: 'categoriaProductos'
        })
    };

    Producto.associate = function(models){
        Producto.belongsToMany(models.Usuario, {
            as: 'productos',
            through: 'usuarios-productos',
            foreignKey: 'idproductos',
            otherKey: 'idusuarios',
            timestamps: false 
        })
    };

    return Producto;
}