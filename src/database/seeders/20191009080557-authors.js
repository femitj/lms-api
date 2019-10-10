module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Authors', [
    {
      id: '1',
      userId: '1',
      name: '',
      slug: '',
      bio: '',
      avatar: '',
      facebook: '',
      linkedin: ''
    },
    {
      id: '2',
      userId: '1',
      name: '',
      slug: '',
      bio: '',
      avatar: '',
      facebook: '',
      linkedin: ''
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Authors', null, {})
};
