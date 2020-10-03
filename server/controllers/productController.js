const
    ProductModel = require('../models/ProductModel');
  
const
    Product = new ProductModel();
   

exports.actionIndex = async (req, res) => {
    let products = await Product.find('all');
	console.log(products);
	res.send(products);
}	

