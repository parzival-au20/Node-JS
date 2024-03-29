const Product = require("../models/product");
const Category = require("../models/category");

exports.getAddProducts = (req,res,next) => {
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    Category.getAll()
        .then((categories)=> {
            res.render('admin/add-product', {
                title: 'New Product',
                path : '/admin/add-product',
                categories : categories[0],
            });
        })
        .catch( (err) => {
            console.log(err);
        });
    
};

exports.postAddProduct = (req,res,next) => {
    //database kayıt
    const product = new Product( req.body.name, 
                                 req.body.price, 
                                 req.body.imageUrl, 
                                 req.body.description,
                                 req.body.categoryid);
                            
    product.saveProduct()
        .then(()=> {
            res.redirect('/');
        })
        .catch( (err) => {
            console.log(err);
        });
    
};


exports.getEditProduct = (req,res,next) => {

    const productId = req.params.productid;

    Product.getById(productId)
        .then((product) => {
            Category.getAll()
                .then((categories)=> {
                    res.render('admin/edit-product', {
                        title: 'Edit Product',
                        path : '/admin/products',
                        product : product[0][0],
                        categories : categories[0],
                    });
                })
                .catch( (err) => {
                    console.log(err);
                });
            
        }).catch((err) => {
            console.log(err);
        });

};

exports.postEditProduct = (req,res,next) => {
    //database kayıt
    const product = new Product();

    product.id = req.body.id;
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryid = req.body.categoryid;

    Product.Update(product)
        .then(()=> {
            res.redirect('/admin/products?action=edit');
        })
        .catch( (err) => {
            console.log(err);
            });
    
};
exports.postDeleteProduct = (req,res,next) => {
    //database kayıt
    Product.DeleteById(req.body.productid)
        .then(()=> {
            res.redirect('/admin/products?action=delete');
        })
        .catch((err) => {
            console.log(err);
            });

};

exports.getProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','index.html'));
    Product.getAll()
        .then((products) => {
            res.render('admin/products', {
                title: 'Admin Products',
                products:products[0],
                path : '/admin/products',
                action : req.query.action,
            });

        }).catch((err) => {
            console.log(err);
        });
}