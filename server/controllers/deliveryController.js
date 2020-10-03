const 
    DeliveryModel         = require('../models/DeliveryModel'),
    DeliveryHasOrderModel = require('../models/DeliveryHasOrderModel'),
    DeliveryStatusModel   = require('../models/DeliveryStatusModel');

const
    DeliveryStatus   = new DeliveryStatusModel(),
    DeliveryHasOrder = new DeliveryHasOrderModel(),
    Delivery         = new DeliveryModel();

    
exports.actionIndex = async (req, res) => {
	const GET = req.query;
	console.log(GET);
	let 
		delivery = {},
		id = GET.id;
	
	delivery = await Delivery.find('one',{
		select: [
			'user.firstname',
			'user.lastname',
			'user.patronymic',
			'user.raiting',
			'order.id as oid',
			'orderStatus.name',
		
		],
		join: [
			['left', 'orderStatus', 'orderStatus.id = delivery.id'],
			['left', 'delivery_has_order', 'delivery_has_order.deliveryId = delivery.id'],
			['left', 'order', 'order.id = delivery_has_order.orderId'],
			['left', 'user', 'user.id = delivery.courierId'],
		]
	});
	
	res.send(delivery);
}

exports.actionView = async (req, res) => {

    let 
        status     = [],
        orders     = [],
        hasOrders  = [],
        deliveries = [];

    deliveries = await Delivery.find('all', {
        join: ['inner', 'user', 'user.id = delivery.courierId'],
    });

    for(let i = 0; i < deliveries.length; i++){
        let status = await DeliveryStatus.findById(deliveries[i].statusId);
        deliveries[i].status = status.name;
    }

    // hasOrders = DeliveryHasOrder.find('all', {
    //     where: {
    //         {eq: {deliveryId: }},
    //     },
    // });



    res.send(deliveries);
}