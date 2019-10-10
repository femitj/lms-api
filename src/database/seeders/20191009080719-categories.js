module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Categories', [
    {
      id: 1,
      title: 'Technolody Trends',
      slug: 'Technolody-Trends',
      userId: 1,
      type: 'blogs',
      avatar: '',
      description: '',
    },
    {
      id: 2,
      title: 'Tools',
      slug: 'Tools',
      userId: 1,
      type: 'courses',
      avatar: '',
      description: '',
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Categories', null, {})
};
