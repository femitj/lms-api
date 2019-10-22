module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Lessons', [
    {
      description: 'Awesome Vue.js with SASS Processing',
      videoUrl: 'https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0',
      moduleId: '9af2fb97-e829-4fd9-b47f-aaa8414720ea',
    },
    {
      description: 'Github Webhooks for Beginneers',
      videoUrl: 'https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0',
      moduleId: 'ea302b0e-13e1-4882-8c7d-5f4240500fd3',
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Lessons', null, {})
};
