module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      userId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      courseId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Courses',
          key: 'id'
        }
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
  down: queryInterface => queryInterface.dropTable('Enrollments')
};
