const
	ProductModel = require('../models/ProductModel'),
    OrderModel 	 = require('../models/OrderModel');
  
const
	Product = new ProductModel(),
    Order 	= new OrderModel();


const
    DateModule = require('../lib/DateModule');


exports.actionIndex = async (req, res) => {
	let products = [];
	let orders = await Order.find('all', {
		select: [
			'order.id as id',
			'order.date',
			'user.firstname',
			'user.lastname',
			'user.patronymic',
			'user.studentGroup',
			'user.course',			
		],
		join: [			
			['left', 'user', 'order.idCreator = user.id'],
		],
	});
		
	for (let i = 0; i < orders.length; i++){
		products = await Product.find('all', {			
			select:[
				'product.id as id',
				'product.name',
				'product.img',
				'product.desc',
				'order_has_product.count as count',
			],			
			join:[
				['inner', 'order_has_product','order_has_product.productId = product.id'],
				['inner', 'order', 'order_has_product.orderId = order.id'],
			],
			where : {eq: {'order.id': orders[i].id}},
		});
		
        orders[i].products = products;
        orders[i].date     = DateModule.formatViewDate(orders[i].date);
    }
    
    console.log(orders[0]);
	
	res.send(orders);
}


exports.actionView = async (req, res) => {
	let 
		GET      = req.query,
		id       = GET.id,
	    order    = {},
		products = [];
	
	if(isNaN(id)){
		res.status(404)
        res.send('404');
        return;
    }
	
	order = await Order.find('one',  {
        where : {eq: {'id': id}},        
    })
	
	if(order == undefined){
		res.status(404)
        res.send('404');
        return;
	}	
	
	products = await Product.find('all', {
		select:[
			'product.id as id',
			'product.name',
			'product.img',
			'product.desc',
			'order_has_product.count',
		],			
		join:[
			['inner', 'order_has_product','order_has_product.idProduct = product.id'],
			['inner', 'order', 'order_has_product.idOrder = order.id'],
		],
		where : {eq: {'order.id': order.id}},
	})
	
	order.products = products;
	
	res.send(order);
	return;
}


exports.indexAjax = async (req, res) => {
	const
        POST = req.body,
        GET  = req.query;
	
	let
        skip      = POST.skip,
        limit     = POST.limit;
	
	let orders = await Order.find('all', {
		join: [
			['left', 'user', 'order.idUser = user.id']
		],
		limit: skip + ', ' + limit,
	});
	
	res.send(orders);	
}

exports.createOrder = async (req, res) =>{
	const POST = req.body;
	
	let today = new Date(),
		dd = today.getDate(),
		mm = today.getMonth()+1, 
		yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;
	
    res.send(POST);	
}	