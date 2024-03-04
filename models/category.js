
const categories = [ 
{id: "1", name: 'Telefon', description: 'Telefon kategori ürünleri'},
{id: "2", name: 'Bilgisayar', description: 'Bilgisayar kategori ürünleri'},
{id: "3", name: 'Beyaz Eşya',description: 'Beyaz Eşya kategori ürünleri'},];

module.exports = class Category {

    constructor(name, price, imageUrl, description){
        this.id = (categories.length + 1).toString();
        this.name = name;
        this.description = description;
    }

    saveProduct(){
        categories.push(this);
    }

    static getAll(){
        return categories;
    }

    static getById(id){
        const category = categories.find(p => p.id === id);
        return category;
    }
    static DeleteById(id){
        const index = categories.findIndex(p => p.id === id);
        categories.splice(index, 1);
    }

    static Update(category){
        const index = categories.findIndex(i => i.id === category.id);

        categories[index].name = category.name;
        categories[index].description = category.description;
    }
}