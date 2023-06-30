 import ProductManager from "./ProductManager.js";

 let miPimerProducto = new ProductManager("./productos.json");
 miPimerProducto.agregarProduct("Fideos","Moño",17,"imagen2.jpg",30);

 let segundo = new ProductManager("./productos.json");
 console.log(segundo.agregarProduct("Fideos","Moño",17,"imagen2.jpg",30));