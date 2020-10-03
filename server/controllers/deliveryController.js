const 
    DeliveryModel         = require('../models/DeliveryModel'),
    DeliveryHasOrderModel = require('../models/DeliveryHasOrderModel'),
    DeliveryStatusModel   = require('../models/DeliveryStatusModel');

const
    DeliveryStatus   = new DeliveryStatusModel(),
    DeliveryHasOrder = new DeliveryHasOrderModel(),
    Delivery         = new DeliveryModel();

    
exports.actionIndex = async (req, res) => {

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