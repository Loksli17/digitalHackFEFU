const
    ProductModel = require('../models/ProductModel');
  
const
    Product = new ProductModel();
   

exports.actionIndex = async (req, res) => {
    let products = await Product.find('all', {
		select: [
		'shop_has_product.id as id',
		'product.price',
		'product.value',
		'product.desc',
		'product.img',
		'product.name as name',
		'shop.name as sname',
		
		],
		
		join: [
            ['right', 'shop_has_product', 'shop_has_product.idProduct = product.id'],
            ['left', 'shop', 'shop.id = shop_has_product.idShop'],
        ],		
	});
	
    res.send(products);
    
    console.log(products);
	return;
}	


exports.actionView = async (req, res) => {
	let 
		GET = req.query,
		id  = GET.id,
	    product = {};
	
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
	
	const
        POST = req.body,
        GET  = req.query;
	
	let
        skip      = POST.skip,
        limit     = POST.limit;
	
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
            ['left', 'shop_has_product', 'shop_has_product.idProduct = product.id'],
            ['left', 'shop', 'shop.id = shop_has_product.idShop'],
        ],	
		limit: skip + ', ' + limit,
	});
	
	res.send(products);	
}