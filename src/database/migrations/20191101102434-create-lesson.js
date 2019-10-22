module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      videoUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fileUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      moduleId: {
        allowNull: true,
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Modules',
          key: 'id',
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
  down: queryInterface => queryInterface.dropTable('Lessons')
};
