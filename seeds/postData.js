const { Post } = require('../models');

const postdata = [
    {
        post_title: 'Tech',
        post_content: 'Software',
    },
];
const seedPost = () =>{
    Post.bulkCreate(postdata);
} 
module.exports = seedPost;


