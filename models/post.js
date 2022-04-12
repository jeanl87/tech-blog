const { Model, DataTypes } = require("sequelize");
const { Post } = require(".");
const sequelize = require("../config/connection");

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
