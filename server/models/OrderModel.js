const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function OrderModel(){
    tableName = 'order';
    modelMysql.call(this, tableName);
}

//наследование
OrderModel.prototype = Object.create(modelMysql.prototype);
OrderModel.prototype.constructor = OrderModel;


OrderModel.prototype.rules = {
    integer : ['isClose', 'idCreator'],
    date    : ['date'],
};


OrderModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
	date    : 'Дата должна быть формата ГГГГ:ММ:ДД',
}


OrderModel.prototype.fields = {
    id        : 'ID',
    date  	  : 'Дата',
    idUser 	  : 'ID пользователя',  
}


module.exports = OrderModel;
