module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    bio: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    facebook: DataTypes.TEXT,
    linkedin: DataTypes.TEXT
  }, {});
  Author.associate = (models) => {
    Author.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onUpdate: 'CASCADE'

    });
  };
  return Author;
};