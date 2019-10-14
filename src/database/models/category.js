module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    userId: DataTypes.UUID,
    type: DataTypes.STRING,
    avatar: DataTypes.STRING,
    description: DataTypes.TEXT,
    noOfMentees: DataTypes.INTEGER,
    noOfMentors: DataTypes.INTEGER,
    coursesCompleted: DataTypes.INTEGER
  }, {});
  Category.associate = (models) => {
    Category.hasMany(models.Course, {
      foreignKey: 'categoryId',
      as: 'course',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    Category.hasMany(models.Blog, {
      foreignKey: 'categoryId',
      as: 'blog',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return Category;
};