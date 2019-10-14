import hashHelper from '../../helpers/Hash';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
      firstName: 'Femi',
      lastName: 'Tijani',
      email: 'femi@itskillscenter.com',
      password: hashHelper.hashPassword('12345678'),
      avatar: '',
      role: 'instructor',
      status: 'active'
    },
    {
      id: '91542e6f-94bc-4e80-a667-586fb0752f23',
      firstName: 'Franck',
      lastName: 'Dublin',
      email: 'franck@gmail.com',
      password: hashHelper.hashPassword('12345678'),
      avatar: '',
      role: 'student',
      status: 'active'
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
