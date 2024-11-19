const conexion = require("./conexion.js");
const Producto = require("./models/Producto.entity.js");

// EJEMPLO ASÍNCRONO
// conexion.sync().then(() => {
//     console.log("Conexión a Base de Datos EXITOSA");
// })

(async () => {
    try {
        await conexion.sync();
        console.log("Conexión a Base de Datos EXITOSA");

        const listadoProducto = await Producto.findAll();
        
        console.log(listadoProducto);
    } catch (error) {
        console.log(error.message);
    }
    
    
})()