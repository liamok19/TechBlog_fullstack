const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    //Post PK for comment
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    //Post PK for comment
    foreignKey: 'user_id'
});




module.exports = { 
    User, 
    Post,
    Comment
};
