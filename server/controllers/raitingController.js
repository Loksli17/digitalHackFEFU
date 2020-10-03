const
    UserModel = require('../models/UserModel');

const
    User = new UserModel();


exports.actionIndex = async (req, res) => {
    let 
        users = [];
        
    
    users = await User.find('all', {
        select   : ['lastname', 'firstname', 'raiting'],
        order    : 'raiting',
        limit    : 30,
        orderDesc: true,
    });

    for(let i = 0; i < users.length; i++){
        users[i].place = i;
    }

    res.send({users});
}


exports.action