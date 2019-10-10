module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      body: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      featured_img: {
        allowNull: true,
        type: Sequelize.STRING
      },
      slug: {
        allowNull: true,
        type: Sequelize.STRING
      },
      meta_title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      meta_description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      meta_keywords: {
        allowNull: true,
        type: Sequelize.STRING
      },
      authorId: {
        allowNull: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
        }
      },
      is_published: {
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
    });
  },
  down: queryInterface => queryInterface.dropTable('Blogs')
};
