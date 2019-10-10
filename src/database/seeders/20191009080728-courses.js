module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Courses', [
    {
      id: 1,
      title: 'Git and Github',
      description: 'Learn ',
      videoId: 300,
      categoryId: 2
    },
    {
      id: 2,
      title: 'Unit Testing Tools',
      description: 'Learn mocha and jest',
      videoId: 300,
      categoryId: 2
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Courses', null, {})
};
