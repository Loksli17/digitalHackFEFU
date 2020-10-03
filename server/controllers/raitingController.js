const
    UserModel = require('../models/UserModel');

const
    User = new UserModel();

const
    DateModule = require('../lib/DateModule');


exports.actionIndex = async (req, res) => {
    
    let 
        users = [];
        
    
    users = await User.find('all', {
        select   : ['lastname', 'firstname', 'raiting', 'id'],
        order    : 'raiting',
        limit    : 30,
        orderDesc: true,
    });

    for(let i = 0; i < users.length; i++){
        users[i].place = i;
    }

    res.send(users);
}


exports.actionChange = async (req, res) => {

    const
        POST = req.body;

    let
        mark   = POST.mark,
        userId = POST.userId,
        result = false,
        user   = {};

    if(Number(userId) == undefined){
        res.status(404).send({});
        return;
    }

    user = await User.findById(userId);

    if(user == undefined){
        res.status(404).send({});
        return;
    }

    user.raiting  = Number(user.raiting) + Number(mark);
    user.dateBorn = DateModule.formatDbDate(user.dateBorn);
    
    result = await User.save({data: user, id: user.id});
    
    if(result == true){
        res.status(200).send({message: 'Рейтинг успешно изменен'});
    }else{
        res.status(500).send({message: 'Внутреняя ошибка сервера'});
    }
}