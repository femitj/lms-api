module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    description: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    courseId: DataTypes.UUID,
  }, {});
  Video.associate = (models) => {
    // Video.belongsTo(models.Course, {
    //   foreignKey: 'courseId',
    //   as: 'course',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    // });
  };
  return Video;
};
