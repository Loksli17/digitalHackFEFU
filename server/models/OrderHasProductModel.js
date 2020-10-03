const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function OrderHasProductModel(){
    tableName = 'order_has_product';
    modelMysql.call(this, tableName);
}

//наследование
OrderHasProductModel.prototype = Object.create(modelMysql.prototype);
OrderHasProductModel.prototype.constructor = OrderHasProductModel;


OrderHasProductModel.prototype.rules = {
    integer : ['count','idProduct', 'idOrder'],
};


OrderHasProductModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


OrderHasProductModel.prototype.fields = {
    id        : 'ID',
    count  	  : 'Количество',
    idProduct : 'ID продукта',
    idOrder	  : 'ID заказа',
}


module.exports = OrderHasProductModel;
