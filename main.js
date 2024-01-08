
class ProductManager {

    static ultId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {

        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("El código debe ser único.. o todos moriremos!");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.error("Not Found!");
        } else {
            console.log(product);
        }
    }
}

//PROCESO DE TESTING: 

const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("Render interior", "render 3d habitacion interior", 5000, "sin imagen", "ren01", 100);


console.log(manager.getProducts());

manager.addProduct("Render exterior", "render 3d exterior", 7000, "sin imagen", "ren02", 100);
manager.addProduct("Plano", "legajo tecnico", 20000, "sin imagen", "legTec", 100);

console.log(manager.getProducts());

console.log("Verificamos ");
manager.getProductById(20);