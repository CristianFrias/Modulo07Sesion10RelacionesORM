const conexion = require("./conexion.js");
const Producto = require("./models/Producto.entity.js");
const TipoProducto = require("./models/TipoProducto.entity.js");

// EJEMPLO ASÍNCRONO
// conexion.sync().then(() => {
//     console.log("Conexión a Base de Datos EXITOSA");
// })

(async () => {
    try {
        await conexion.sync();
        console.log("Conexión a Base de Datos EXITOSA");

        // // CREACIÓN DE TIPOS DE PRODUCTOS
        // const tipoRopa = await TipoProducto.create({ nombre: "Ropa" });
        // const tipoAlimento = await TipoProducto.create({ nombre: "Alimentos" });
        // console.log("Tipos de productos creados con éxito");
        

        // // CREACIÓN DE PRODUCTOS
        // await Producto.create({ nombre: "Polera", valor: 9_000, tipo_producto_id: tipoRopa.id});
        // await Producto.create({ nombre: "Jean", valor: 15_000, tipo_producto_id: tipoRopa.id});
        // await Producto.create({ nombre: "Arroz", valor: 2_500, tipo_producto_id: tipoAlimento.id});
        // console.log("Productos creados con éxito");

        // const listadoProductos = await Producto.findAll({
        //     where: {
        //         tipo_producto_id: 1
        //     },
        //     order: [
        //         ["valor", "DESC"]
        //     ],
        //     attributes: ["id","nombre","valor"],
        //     include: {
        //         model: TipoProducto,
        //         as: "tipoProducto",
        //         attributes: ["id"]
        //     }
        // });
        // console.table(JSON.parse(JSON.stringify(listadoProductos)));

        // const listadoTipos = await TipoProducto.findAll({
        //     include:{
        //         model: Producto,
        //         as: "productos"
        //     }
        // });

        const listadoTipos = await TipoProducto.findOne({
            where: {
                id: 2
            },
            include:{
                model: Producto,
                as: "productos"
            }
        });
        console.log(JSON.parse(JSON.stringify(listadoTipos)));

    } catch (error) {
        console.log(error.message);
    }
    
})()