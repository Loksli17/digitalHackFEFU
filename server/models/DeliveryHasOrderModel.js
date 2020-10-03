const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function DeliveryHasOrderModel(){
    tableName = 'delivery_has_order';
    modelMysql.call(this, tableName);
}

//наследование
DeliveryHasOrderModel.prototype = Object.create(modelMysql.prototype);
DeliveryHasOrderModel.prototype.constructor = DeliveryHasOrderModel;


DeliveryHasOrderModel.prototype.rules = {
    integer : ['deliveryId','orderId'],    
};


DeliveryHasOrderModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


DeliveryHasOrderModel.prototype.fields = {
    id        : 'ID',
    deliveryId: 'ID доставки',
    orderId   : 'ID заказа',
}


module.exports = DeliveryHasOrderModel;
