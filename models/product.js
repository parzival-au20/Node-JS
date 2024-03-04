const products = [    
    {id: "1", name: 'Samsung S8', price : 3000, imageUrl:'1.jpg', description: 'iyi telefon', category:"1"},
    {id: "2", name: 'Samsung S7', price : 2000, imageUrl:'2.jpg', description: 'idare ede', category:"1"},
    {id: "3", name: 'Samsung S9', price : 4000, imageUrl:'3.jpg', description: 'çok iyi telefon', category:"1"},
    {id: "4", name: 'Samsung 10S', price : 4500, imageUrl:'7.jpg', description: 'güzel telefon', category:"1"},
    {id: "5", name: 'Macbook Pro', price : 37000, imageUrl:'mac.jpg', description: 'Macbook Pro', category:"2"},
    {id: "6", name: 'Asus Rog', price : 31000, imageUrl:'asus-rog.png', description: 'Asus Rog oyuncu bilgisayarı', category:"2"},
    {id: "7", name: 'Çamaşır Makinesi', price : 24000, imageUrl:'beyaz-esya.jpg', description: 'Vestel Çamaşır Makinesi', category:"3"},
    {id: "8", name: 'Bulaşık Makinesi', price : 22000, imageUrl:'beyaz-esya2.jpg', description: 'Samsung Bulaşık Makinesi', category:"3"},
    {id: "9", name: 'Buzdolabı', price : 28000, imageUrl:'beyaz-esya-3.webp', description: 'Arçelik Buzdolabı 220LT', category:"3"},
];

module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryid){
        this.id = (Math.floor(Math.random()*99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.category = categoryid;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }

    static getById(id){
        const product = products.find(p => p.id === id);
        return product;
    }
    static DeleteById(id){
        const index = products.findIndex(p => p.id === id);
        products.splice(index, 1);
    }

    static Update(product){
        const index = products.findIndex(i => i.id === product.id);

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
        products[index].category = product.categoryid;
    }

    static getProductsByCategoryId(categoryId){
        const categories = products.filter(p => p.category == categoryId);
        return categories;
    }
}


const productss = [
    {name: 'Samsung S8', price : 3000, image:'1.jpg', description: 'iyi telefon'},
    {name: 'Samsung S7', price : 2000, image:'2.jpg', description: 'idare ede'},
    {name: 'Samsung S9', price : 4000, image:'3.jpg', description: 'çok iyi telefon'},
    {name: 'Samsung 10S', price : 4500, image:'7.jpg', description: 'güzel telefon'},
];