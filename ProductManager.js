
import utils from "./utils.js";

export default class ProductManager {
    constructor(path){
    this.products = []
    this.path = path;
    }

 async getProducts(){
    try{
        let data = await utils.readFile(this.path);
        return data?.length > 0? this.products : "No hay registros";
    }catch(err){
        console.log(err);
    }
    };


    async agregarProduct(tittle ,description ,precio, thumbnail, stock){
    if(tittle == null || description == null || precio == null || thumbnail == null || stock == null){
    console.log ("Debe completar todos los campos")
    return; }
    try{
        let data = await utils.readFile(this.path);
        this.products = data?.length > 0 ? data : [];
    }catch(err){
        console.log(err);
    }
    const product = { 
        tittle ,
        description ,
        precio ,
        thumbnail,
        stock };
        
    if (this.products.length === 0) {
    product.id = 1;
    } else {
    product.id = this.products[this.products.length - 1].id + 1;
    }
    await utils.writeFile(this.path,this.products);
    console.log(`Nuevo producto agregado: ${product}`);



    this.products.push(product)
    console.log("Se almaceno el producto");
    }

getProductById(id) {
    const product = this.products.find((product)=>{
    return product.id== id;
    });
    if(!product){
    return "Not found"
    }else{
    return product;}
    }
    }






/*const productManager = new ProductManager()

console.log(productManager.getProducts());
console.log(productManager.agregarProduct("Arroz","blanco",15,"imagen.jpg"));
console.log(productManager.agregarProduct("Fideos","Moño",17,"imagen2.jpg",30));
console.log(productManager.agregarProduct("Azucar","000",15,"imagen3.jpg",36));
console.log(productManager.agregarProduct("Agua","500cc",30,"imagen5.jpg",10));
console.log(productManager.getProducts());
console.log(productManager.getProductByCode(3));
console.log(productManager.getProductByCode(10)); */