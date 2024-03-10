const connection = require('../utility/database');

module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryid){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.category = categoryid;
    }

    saveProduct(){
       return connection.execute('INSERT INTO products (name, price, imageUrl, description, categoryid) VALUES (?, ?, ?, ?, ?)', 
       [this.name, this.price, this.imageUrl, this.description, this.category]);
    }

    static getAll(){
        return  connection.execute('SELECT * FROM products');    
    }

    static getById(id){
        return  connection.execute('SELECT * FROM products WHERE products.id=?', [id]);
    }
    static DeleteById(id){
        return connection.execute('DELETE FROM products WHERE id=?', [id]);
    }
    static Update(product){
        return connection.execute('UPDATE products SET name=?, price=?, imageUrl=?, description=?, categoryid=? WHERE id=?', 
        [product.name, product.price, product.imageUrl, product.description, product.categoryid, product.id]);
    }
    

    static getProductsByCategoryId(categoryId){
        return this.getAll()
        .then((products) => {
            const categories = products[0].filter(p => p.categoryid == categoryId);
            return categories;
        }).catch((err) => {
            console.log(err);
        });
    }
}
