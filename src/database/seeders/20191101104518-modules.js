module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Modules', [
    {
      id: '9af2fb97-e829-4fd9-b47f-aaa8414720ea',
      title: 'Welcome',
      courseId: '3dd4b34a-7554-495e-c688-36afda987837',
    },
    {
      id: 'ea302b0e-13e1-4882-8c7d-5f4240500fd3',
      title: 'Introduction',
      courseId: '3dd4b34a-7554-495e-c688-36afda987837',
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Modules', null, {})
};
