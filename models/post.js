const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create the post model
class Post extends Model {}

Post.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
            //Post PK for comment
        primaryKey: true,
        autoIncrement: true,
        },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
    date: {
        type: DataTypes.STRING, 
        allowNull: false,
    },    
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;