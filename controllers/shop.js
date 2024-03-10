const Product = require("../models/product");
const Category = require("../models/category");


exports.getIndex = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    const categories = Category.getAll();

    Product.getAll()
        .then((products) => {
            Category.getAll()
                .then((categories)=> {
                    res.render('shop/index', {
                        title: 'Shopping',
                        products:products[0],
                        categories:categories[0],
                        path : '/'
                    });
                })
                .catch( (err) => {
                    console.log(err);
                });

        }).catch((err) => {
            console.log(err);
        });
    
}

exports.getProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    const categories = Category.getAll();
    Product.getAll()
        .then((products) => {
            res.render('shop/products', {
                title: 'Products',
                products:products[0],
                categories:categories,
                path : '/products'
            });

        }).catch((err) => {
            console.log(err);
        });

}

exports.getProductsByCategoryId = (req, res, next) => {

    const categoryid = req.params.categoryid;
    //const products = Product.getProductsByCategoryId(categoryid);
    //const categories = Category.getAll();

    Product.getProductsByCategoryId(categoryid)
        .then((products) => {
            Category.getAll()
                .then((categories)=> {
                    res.render('shop/products', {
                        title: 'Products',
                        products:products,
                        categories:categories[0],
                        selectedCategory:categoryid,
                        path : '/products'
                    });
                })
                .catch( (err) => {
                    console.log(err);
                });

        }).catch((err) => {
            console.log(err);
        });
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.productid;
    Product.getById(productId)
        .then((product) => {
            res.render('shop/product-detail', {
                title: product[0][0].name,
                product:product[0][0],
                path : 'products'
            });
        }).catch((err) => {
            console.log(err);
        });

}

exports.getProductDetails = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    const products = Product.getAll();

    res.render('shop/details', {
        title: 'Details',
        path : '/details'
    });
}
exports.getCart = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    const products = Product.getAll();

    res.render('shop/cart', {
        title: 'Cart',
        path : '/cart'
    });
}
exports.getOrders = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    const products = Product.getAll();

    res.render('shop/orders', {
        title: 'Orders',
        path : '/orders'
    });
}