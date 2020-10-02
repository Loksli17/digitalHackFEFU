const 
    UserModel = require('../models/UserModel');

const 
    User = new UserModel();

exports.actionIndex = async (req, res) => {
    let users = await User.find('all');

    res.send(users);
}