module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Blogs', [
    {
      title: 'How to grow your Natural Hair',
      body: '<p>Do you want to learn the fastest way to grow your natural hair? Read on...</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://trainquarters.com/user_files/154/5reasons.jpg\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n',
      featured_img: '',
      slug: '',
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      authorId: 1,
      tags: '',
      categoryId: 1,
      is_published: '',
      scheduled: ''
    },
    {
      title: 'How to grow your Natural Hair',
      body: '<p>Do you want to learn the fastest way to grow your natural hair? Read on...</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://trainquarters.com/user_files/154/5reasons.jpg\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n',
      featured_img: '',
      slug: '',
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      authorId: 1,
      tags: '',
      categoryId: 1,
      is_published: '',
      scheduled: ''
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Blogs', null, {})
};
