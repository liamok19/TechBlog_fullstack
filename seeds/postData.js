const { Post } = require('../models');

const postdata = [
    {
        post_title: 'Tech',
        body: 'Software',
        date: 'January 19, 2022 16:30:00'
    },
    {
        post_title: 'Tech in Fashion',
        body: 'Arts',
        date: 'March 15, 2022 18:00:00'
    },
    {
        post_title: 'Tech in Film',
        body: 'Media',
        date: 'May 11, 2022 12:30:00'
    },
];
const seedPost = () =>{
    Post.bulkCreate(postdata);
} 
module.exports = seedPost;


