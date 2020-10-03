const modelMysql = require('../lib/mysqlOrm');

//model of tasks-mysql
function UserModel(){
    tableName = 'user';
    modelMysql.call(this, tableName);
}

//наследование
UserModel.prototype = Object.create(modelMysql.prototype);
UserModel.prototype.constructor = UserModel;


UserModel.prototype.rules = {
    string  : ['lastname', 'firstname', 'patronymic', 'password', 'avatar'],
    required: ['lastname', 'firstname', 'email'],
    max     : [{lastname: 255}, {firstname: 255}, {patronymic: 255}, {email: 255}, {password: 255}],
    min     : [{lastname: 1}, {firstname: 2}, {email: 7}, {password: 8}],
    unique  : ['email'],
    email   : ['email'],
    // phone   : ['phone'],
};


UserModel.prototype.rulesMessages = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    required: 'Данное поле является обязательным',
    max     : 'Значение данного поля больше максимально допустимого',
    min     : 'Значение данного поля меньше допустимого',
    email   : 'Введите верный e-mail',
    unique  : 'Запись с таким значением уже существует',
    phone   : 'Номер неверного формата',
}


UserModel.prototype.fields = {
    id        : 'ID',
    lastname  : 'Фамилия',
    firstname : 'Имя',
    patronymic: 'Отчество',
    isActive  : 'Состояние бана',
    roles     : 'Роли пользователя',
    email     : 'E-mail',
    avatar    : 'Изображение',
    phone     : 'Номер телефона',
}


module.exports = UserModel;
