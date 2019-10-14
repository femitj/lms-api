module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Categories', {
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
      slug: {
        allowNull: true,
        type: Sequelize.STRING
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
      type: {
        allowNull: false,
        type: Sequelize.ENUM('courses', 'blogs'),
        defaultValue: 'courses'
      },
      avatar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      noOfMentees: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      noOfMentors: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      coursesCompleted: {
        allowNull: true,
        type: Sequelize.INTEGER
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
  down: queryInterface => queryInterface.dropTable('Categories')
};
