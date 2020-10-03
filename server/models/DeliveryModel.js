const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function DeliveryModel(){
    tableName = 'delivery';
    modelMysql.call(this, tableName);
}

//наследование
DeliveryModel.prototype = Object.create(modelMysql.prototype);
DeliveryModel.prototype.constructor = DeliveryModel;


DeliveryModel.prototype.rules = {
    integer : ['statusId'],
    string  : ['courierId'],
   };


DeliveryModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


DeliveryModel.prototype.fields = {
    id       	  : 'ID',
    statusId  	  : 'ID статус',
    courierId 	  : 'ID курьера',
}


module.exports = DeliveryModel;
