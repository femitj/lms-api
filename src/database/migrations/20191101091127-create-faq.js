module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Faqs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      question: {
        allowNull: true, 
        type: Sequelize.STRING
      },
      answer: {
        allowNull: true,
        type: Sequelize.STRING
      },
      CourseId: {
        allowNull: true,
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Courses',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })),
  down: queryInterface => queryInterface.dropTable('Faqs')
};