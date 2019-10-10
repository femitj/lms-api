module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    video_url: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
  }, {});
  Video.associate = (models) => {
    Video.belongsTo(models.Course, {
      foreignKey: 'courseId',
      as: 'course',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return Video;
};
