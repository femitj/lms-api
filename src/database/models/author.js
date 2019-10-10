module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    bio: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    facebook: DataTypes.TEXT,
    linkedin: DataTypes.TEXT
  }, {
    underscore: true,
  });
  Author.associate = (models) => {
    Author.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onUpdate: 'CASCADE'

    });
  };
  return Author;
};