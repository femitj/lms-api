module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    featured_img: DataTypes.STRING,
    slug: DataTypes.STRING,
    meta_title: DataTypes.STRING,
    meta_description: DataTypes.STRING,
    meta_keywords: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    tags: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    is_published: DataTypes.STRING,
    scheduled: DataTypes.STRING
  }, {
    underscore: true,
  });
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
