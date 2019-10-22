'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faq = sequelize.define('Faq', {
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    courseId: DataTypes.UUID
  }, {});
  Faq.associate = function(models) {
    // associations can be defined here
  };
  return Faq;
};