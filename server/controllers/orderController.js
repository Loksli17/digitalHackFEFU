const
	ProductModel         = require('../models/ProductModel'),
	OrderHasProductModel = require('../models/OrderHasProductModel'),
    OrderModel 	         = require('../models/OrderModel');
  
const
	OrderHasProduct = new OrderHasProductModel(),
	Product         = new ProductModel(),
    Order 	        = new OrderModel();

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
        order: 'id DESC',
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
        where: {eq: {'id': id}},        
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


exports.createOrder = async (req, res) => {

	const POST = req.body;
	
	let 
		newOrder = {
			isClose: 0,
		},
        lastOrder   = [],
        result      = [],
        orderFront  = [],
        currentDate = {}, 
        id          = 0; 
 
    currentDate = new Date();
    currentDate = DateModule.formatDbDate(currentDate);
    
    orderFront = JSON.parse(POST.body);
	
    newOrder.date      = currentDate;
    newOrder.idCreator = orderFront[0].userId;
    
    result = await Order.save({data: newOrder});
    
    if(result != true){
        res.status(404).send({});
    }
	
	lastOrder = await Order.find('one', {
        order: 'id',
        limit: 1,
    });
    
    console.log(lastOrder);
	
    id = lastOrder.id;
    
	for(let i = 0; i < orderFront.length; i++){
		await OrderHasProduct.save({
			data: {
				count	 : orderFront[i].count,
				productId: orderFront[i].productId,
				orderId	 : id,	
			}
		});
	}
	
    res.status(404).send({message: 'Заказ успешно сохранен'});	
}	