module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    description: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    fileUrl: DataTypes.STRING,
    moduleId: DataTypes.UUID,
  }, {});
  Lesson.associate = (models) => {
    // Video.belongsTo(models.Course, {
    //   foreignKey: 'courseId',
    //   as: 'course',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    // });
  };
  return Lesson;
};
