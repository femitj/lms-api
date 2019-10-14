module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Categories', [
    {
      id: '3dd3b34a-7554-425e-a688-36afda199619',
      title: 'Technolody Trends',
      slug: 'Technolody-Trends',
      userId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
      type: 'blogs',
      avatar: '',
      description: '',
    },
    {
      id: '3dd3b34a-7554-425e-c688-36afda199619',
      title: 'Tools',
      slug: 'Tools',
      userId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
      type: 'courses',
      avatar: '',
      description: '',
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Categories', null, {})
};
