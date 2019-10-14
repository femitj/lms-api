module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Courses', [
    {
      id: '3dd4b34a-7554-495e-c688-36afda987837',
      title: 'Git and Github',
      description: 'Learn ',
      categoryId: '3dd3b34a-7554-425e-c688-36afda199619'
    },
    {
      id: '3dd3b34a-7554-425e-a688-36afda199615',
      title: 'Unit Testing Tools',
      description: 'Learn mocha and jest',
      categoryId: '3dd3b34a-7554-425e-c688-36afda199619'
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Courses', null, {})
};
