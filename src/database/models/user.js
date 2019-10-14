module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'inactive', 'unverified'),
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Blog, {
      foreignKey: 'authorId',
      as: 'blog',
      onUpdate: 'CASCADE'
    });
    User.hasMany(models.Category, {
      foreignKey: 'userId',
      as: 'category',
      onUpdate: 'CASCADE'
    });
    // User.belongsToMany(models.Course, {
    //   through: 'Enrollment',
    //   as: 'courses'
    // });
    User.hasMany(models.Enrollment, {
      foreignKey: 'userId',
      as: 'enrollment',
      onUpdate: 'CASCADE'
    });
  };
  return User;
};