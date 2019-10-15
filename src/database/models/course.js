module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    videoId: DataTypes.UUID,
    categoryId: DataTypes.UUID,
    userId: DataTypes.UUID,
    duration: DataTypes.STRING,
    free: DataTypes.BOOLEAN,
    amount: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Course.associate = (models) => {
    Course.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onUpdate: 'CASCADE'
    });
    Course.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
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
