module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    userId: DataTypes.UUID,
    courseId: DataTypes.UUID
  }, {});
  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.User, {
      foreignkey: 'userId',
      as: 'user',
      onUpdate: 'CASCADE'
    });
    Enrollment.belongsTo(models.Course, {
      foreignkey: 'courseId',
      as: 'course',
      onUpdate: 'CASCADE'
    });
    // Enrollment.belongsTo(models.User, {
    //   foreignkey: 'user_id',
    //   as: 'user',
    //   onUpdate: 'CASCADE'
    // });
    // Enrollment.belongsTo(models.Course, {
    //   foreignkey: 'course_id',
    //   as: 'course',
    //   onUpdate: 'CASCADE'
    // });
    // Enrollment.belongsToMany(models.User, {
    //   through: 'Course',
    //   as: 'users'
    // });
  };
  return Enrollment;
};
