const { User } = require('../models');

const userdata = [
    {
        username: 'joey',
        email: 'jo@mail.com',
        password: 'friends',
    },
];
const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true, 
    returning: true,
});

module.exports = seedUser;


