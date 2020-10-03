const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function ProductModel(){
    tableName = 'product';
    modelMysql.call(this, tableName);
}

//наследование
ProductModel.prototype = Object.create(modelMysql.prototype);
ProductModel.prototype.constructor = ProductModel;


ProductModel.prototype.rules = {
    integer : ['price','value'],
    string  : ['desc', 'img', 'name'],
   };


ProductModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


ProductModel.prototype.fields = {
    id        : 'ID',
    price  	  : 'Цена',
    value 	  : 'Количество',
    desc	  : 'Описание',
    img		  : 'Путь к картинке',
    name      : 'Название',
}


module.exports = ProductModel;
