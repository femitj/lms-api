module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Courses', [
    {
      id: '3dd4b34a-7554-495e-c688-36afda987837',
      title: 'Git and Github',
      description: 'Learn, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque necessitatibus distinctio adipisci eius, unde dignissimos maxime doloribus quisquam non harum?',
      categoryId: '3dd3b34a-7554-425e-c688-36afda199619',
      videoUrl: 'https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0',
      duration: '6 months',
      startDate: '2020-01-15',
      endDate: '2020-07-15',
    },
    {
      id: '3dd3b34a-7554-425e-a688-36afda199615',
      title: 'Unit Testing Tools',
      description: 'Learn mocha and jest, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque necessitatibus distinctio adipisci eius, unde dignissimos maxime doloribus quisquam non harum?',
      categoryId: '3dd3b34a-7554-425e-c688-36afda199619',
      videoUrl: 'https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0',
      duration: '6 months',
      startDate: '2020-01-15',
      endDate: '2020-07-15',
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Courses', null, {})
};
