module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    title: DataTypes.STRING,
    courseId: DataTypes.UUID
  }, {});
  Module.associate = (models) => {
    // associations can be defined here
    Module.hasMany(models.Lesson, {
      foreignKey: 'moduleId',
      as: 'lesson',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Module;
};