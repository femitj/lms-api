module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Blogs', [
    {
      id: 'ffe25dbe-29ea-4755-8461-ed116f6739df',
      title: 'How to grow your Natural Hair',
      body: '<p>Do you want to learn the fastest way to grow your natural hair? Read on...</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://trainquarters.com/user_files/154/5reasons.jpg\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n',
      featuredImg: '',
      slug: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      authorId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
      tags: '',
      categoryId: '3dd3b34a-7554-425e-a688-36afda199619',
      isPublished: '',
      scheduled: ''
    },
    {
      id: 'ffe25dbe-29ea-4751-8461-ed116f6739df',
      title: 'How to grow your Natural Hair',
      body: '<p>Do you want to learn the fastest way to grow your natural hair? Read on...</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://trainquarters.com/user_files/154/5reasons.jpg\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n',
      featuredImg: '',
      slug: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      authorId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
      tags: '',
      categoryId: '3dd3b34a-7554-425e-a688-36afda199619',
      isPublished: '',
      scheduled: ''
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Blogs', null, {})
};
