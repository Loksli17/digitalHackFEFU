const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function DeliveryStatusModel(){
    tableName = 'deliveryStatus';
    modelMysql.call(this, tableName);
}

//наследование
DeliveryStatusModel.prototype = Object.create(modelMysql.prototype);
DeliveryStatusModel.prototype.constructor = DeliveryStatusModel;


DeliveryStatusModel.prototype.rules = {
    string  : ['name'],
   };


DeliveryStatusModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


DeliveryStatusModel.prototype.fields = {
    id        : 'ID',
    name      : 'Название',
}


module.exports = DeliveryStatusModel;
