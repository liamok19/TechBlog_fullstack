const { Comment } = require('../models');

const commentdata = [
    {
        description: 'This is the first recorded description',
    },
];
const seedComment = () =>{
    Comment.bulkCreate(commentdata);
} 
module.exports = seedComment;


