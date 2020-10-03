const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function OrderHasStatusModel(){
    tableName = 'order_has_status';
    modelMysql.call(this, tableName);
}

//наследование
OrderHasStatusModel.prototype = Object.create(modelMysql.prototype);
OrderHasStatusModel.prototype.constructor = OrderHasStatusModel;


OrderHasStatusModel.prototype.rules = {
    integer : ['idProduct','idOrder'],
};


OrderHasStatusModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


OrderHasStatusModel.prototype.fields = {
    id        : 'ID',
    idProduct : 'ID продукта',
    idOrder   : 'ID заказа',
}


module.exports = OrderHasStatusModel;
