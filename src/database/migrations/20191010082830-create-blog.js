module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Blogs', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    },
    title: {
      allowNull: true,
      type: Sequelize.STRING
    },
    body: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    featuredImg: {
      allowNull: true,
      type: Sequelize.STRING
    },
    slug: {
      allowNull: true,
      type: Sequelize.STRING
    },
    metaTitle: {
      allowNull: true,
      type: Sequelize.STRING
    },
    metaDescription: {
      allowNull: true,
      type: Sequelize.STRING
    },
    metaKeywords: {
      allowNull: true,
      type: Sequelize.STRING
    },
    authorId: {
      allowNull: true,
      type: Sequelize.DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    tags: {
      allowNull: true,
      type: Sequelize.STRING
    },
    categoryId: {
      allowNull: true,
      type: Sequelize.DataTypes.UUID,
      onUpdate: 'CASCADE',
      references: {
        model: 'Categories',
        key: 'id',
      }
    },
    isPublished: {
      allowNull: true,
      type: Sequelize.STRING
    },
    scheduled: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    }
  })),
  down: queryInterface => queryInterface.dropTable('Blogs')
};
