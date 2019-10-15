module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Videos', [
    {
      description: 'Awesome Vue.js with SASS Processing',
      videoUrl: 'https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0',
      courseId: '3dd4b34a-7554-495e-c688-36afda987837',
    },
    {
      description: 'Github Webhooks for Beginneers',
      videoUrl: 'https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0',
      courseId: '3dd4b34a-7554-495e-c688-36afda987837',
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Videos', null, {})
};
