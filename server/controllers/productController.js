const
    ProductModel = require('../models/ProductModel');
  
const
    Product = new ProductModel();
   

exports.actionIndex = async (req, res) => {
    let products = await Product.find('all', {
		select: [
		
		'product.price',
		'product.value',
		'product.desc',
		'product.img',
		'product.name as name',
		'shop.name as sname'
		],
		
		join: [
            ['inner', 'shop_has_product', 'shop_has_product.idProduct = product.id'],
            ['inner', 'shop', 'shop.id = shop_has_product.idShop'],
        ],		
	});
	
	res.send(products);
	return;
}	

exports.actionView = async (req, res) => {
	let GET = req.query;
	
	let id  = GET.id;
	let product = {};
	
	if(isNaN(id)){
		res.status(404)
        res.send('404');
        return;
    }
	
	product = await Product.find('one',  {
        where : {eq: {'id': id}},        
    })
	
	if(product == undefined){
		res.status(404)
        res.send('404');
        return;
	}
	
	res.send(product);
	return;
}


exports.indexAjax = async (req, res) => {
	let products = await Product.find('all');
	
	res.send(products);
	return;
}