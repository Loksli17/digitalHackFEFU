const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function OrderStatusModel(){
    tableName = 'orderstatus';
    modelMysql.call(this, tableName);
}

//наследование
OrderStatusModel.prototype = Object.create(modelMysql.prototype);
OrderStatusModel.prototype.constructor = OrderStatusModel;


OrderStatusModel.prototype.rules = {
    string  : ['name'],
   };


OrderStatusModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


OrderStatusModel.prototype.fields = {
    id        : 'ID',
    name      : 'Название',
}


module.exports = OrderStatusModel;
