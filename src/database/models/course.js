module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    videoId: DataTypes.UUID,
    categoryId: DataTypes.UUID,
    duration: DataTypes.STRING
  }, {});
  Course.associate = (models) => {
    Course.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onUpdate: 'CASCADE'
    });
    Course.hasMany(models.Video, {
      foreignKey: 'courseId',
      as: 'video',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    // Course.belongsToMany(models.User, {
    //   through: 'Enrollment',
    //   as: 'users'
    // });
  };
  return Course;
};
