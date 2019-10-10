import hashHelper from '../../helpers/Hash';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: '1',
      first_name: 'Femi',
      last_name: 'Tijani',
      email: 'femi@itskillscenter.com',
      password: hashHelper.hashPassword('12345678'),
      avatar: '',
      role: 'instructor',
      status: 'active'
    },
    {
      id: '2',
      first_name: 'Franck',
      last_name: 'Dublin',
      email: 'franck@gmail.com',
      password: hashHelper.hashPassword('12345678'),
      avatar: '',
      role: 'student',
      status: 'active'
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
