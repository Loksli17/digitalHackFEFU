const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function ShopModel(){
    tableName = 'shop';
    modelMysql.call(this, tableName);
}

//наследование
ShopModel.prototype = Object.create(modelMysql.prototype);
ShopModel.prototype.constructor = ShopModel;


ShopModel.prototype.rules = {
       string  : ['name'],
};


ShopModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


ShopModel.prototype.fields = {
    id        : 'ID',
    name      : 'Название',
}


module.exports = ShopModel;
