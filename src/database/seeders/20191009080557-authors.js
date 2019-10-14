module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Authors', [
    {
      id: '0190ae78-d184-4258-add5-0b2c6982efef',
      userId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
      name: '',
      slug: '',
      bio: '',
      avatar: '',
      facebook: '',
      linkedin: ''
    },
    {
      id: '3dd3b24a-7554-425e-a688-36afda195614',
      userId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
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
