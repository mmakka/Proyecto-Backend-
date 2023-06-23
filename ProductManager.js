class ProductManager {
    constructor(){
    this.products = []
    }

getProducts(){
    return this.products
    }

    agregarProduct(tittle ,description ,precio, thumbnail, stock){
    if(tittle == null || description == null || precio == null || thumbnail == null || stock == null){
    console.log ("Debe completar todos los campos")
    return ;
    }
    const product = { 
        tittle ,
        description ,
        precio ,
        thumbnail,
        stock };
    if (this.products.length === 0) {
    product.code = 1;
    } else {
    product.code = this.products[this.products.length - 1].code + 1;
    }

    this.products.push(product)
    console.log("Se almaceno el producto");
    }

getProductByCode(code) {
    const product = this.products.find((product)=>{
    return product.code== code;
    });
    if(!product){
    return "Not found"
    }else{
    return product;}
    }
    }

const productManager = new ProductManager()

console.log(productManager.getProducts());
console.log(productManager.agregarProduct("Arroz","blanco",15,"imagen.jpg"));
console.log(productManager.agregarProduct("Fideos","Moño",17,"imagen2.jpg",30));
console.log(productManager.agregarProduct("Azucar","000",15,"imagen3.jpg",36));
console.log(productManager.agregarProduct("Agua","500cc",30,"imagen5.jpg",10));
console.log(productManager.getProducts());
console.log(productManager.getProductByCode(3));
console.log(productManager.getProductByCode(10));