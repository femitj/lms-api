module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Courses', {
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
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      overview: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      about: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      videoUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      imgUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      videoId: {
        allowNull: true,
        type: Sequelize.DataTypes.UUID,
        onUpdate: 'CASCADE'
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
      userId: {
        allowNull: true,
        type: Sequelize.DataTypes.UUID,
        onUpdate: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      duration: {
        allowNull: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: true,
        type: Sequelize.ENUM('free', 'paid'),
        defaultValue: 'free'
      },
      amount: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      endDate: {
        allowNull: true,
        type: Sequelize.DATEONLY
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
  down: queryInterface => queryInterface.dropTable('Courses')
};
