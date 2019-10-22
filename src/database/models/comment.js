module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Comment.associate = (models) => {
    // associations can be defined here
  };
  return Comment;
};