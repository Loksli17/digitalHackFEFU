const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function ShopHasProductModel(){
    tableName = 'shop_has_product';
    modelMysql.call(this, tableName);
}

//наследование
ShopHasProductModel.prototype = Object.create(modelMysql.prototype);
ShopHasProductModel.prototype.constructor = ShopHasProductModel;


ShopHasProductModel.prototype.rules = {
    integer : ['idShop','idProduct'],  
};


ShopHasProductModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


ShopHasProductModel.prototype.fields = {
    id        : 'ID',
    idShop    : 'ID магазина',
    idProduct : 'ID продукта',
  
}


module.exports = ShopHasProductModel;
