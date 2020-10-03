const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function DeliveryHasStatusModel(){
    tableName = 'delivery_has_status';
    modelMysql.call(this, tableName);
}

//наследование
DeliveryHasStatusModel.prototype = Object.create(modelMysql.prototype);
DeliveryHasStatusModel.prototype.constructor = DeliveryHasStatusModel;


DeliveryHasStatusModel.prototype.rules = {
    integer : ['idProduct','idOrder'],
};


DeliveryHasStatusModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


DeliveryHasStatusModel.prototype.fields = {
    id        : 'ID',
    idProduct : 'ID продукта',
    idOrder   : 'ID заказа',
}


module.exports = DeliveryHasStatusModel;
