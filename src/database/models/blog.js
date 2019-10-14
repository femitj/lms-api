module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    featuredImg: DataTypes.STRING,
    slug: DataTypes.STRING,
    metaTitle: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    metaKeywords: DataTypes.STRING,
    authorId: DataTypes.UUID,
    tags: DataTypes.STRING,
    categoryId: DataTypes.UUID,
    isPublished: DataTypes.STRING,
    scheduled: DataTypes.STRING
  }, {});
  Blog.associate = (models) => {
    Blog.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'user',
      onUpdate: 'CASCADE'
    });
    Blog.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onUpdate: 'CASCADE'
    });
  };
  return Blog;
};
