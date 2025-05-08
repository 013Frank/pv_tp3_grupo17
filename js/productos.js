// Array de productos
let productos = [
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "", precio: 25000 },
  ];
  
  // 1 - Mostrar en consola cada producto
  console.log("1 - Lista de productos:");
  productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
  });
  
  // 2 - Productos con precio mayor a $20
  const productosMayor20 = productos.filter(producto => producto.precio > 20);
  console.log("\n2 - Productos con precio mayor a $20:");
  console.log(productosMayor20);
  
  // 3 - Array con precios con IVA incluido (21%)
  const productosConIVA = productos.map(producto => ({
    descripcion: producto.descripcion,
    precio: (producto.precio * 1.21).toFixed(2)  // toFixed para mostrar 2 decimales
  }));
  console.log("\n3 - Productos con IVA incluido:");
  console.log(productosConIVA);
  
  // 4 - Ordenar el array original por precio (menor a mayor)
  productos.sort((a, b) => a.precio - b.precio);
  console.log("\n4 - Productos ordenados por precio (menor a mayor):");
  console.log(productos);
  
  // 5 - Agregar un nuevo producto al final
  productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
  console.log("\n5 - Producto agregado al final:");
  console.log(productos);
  
  // 6 - Eliminar el producto con el precio más bajo
  const precioMinimo = Math.min(...productos.map(p => p.precio));
  productos = productos.filter(p => p.precio !== precioMinimo);
  console.log("\n6 - Producto con precio más bajo eliminado:");
  console.log(productos);