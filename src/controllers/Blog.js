import slugify from 'slugify';
import Response from '../helpers/Response';
import db from '../database/models';

const { Blog, User, Category } = db;

class BlogController {
  static async create(req, res) {
    try {
      const { payload } = req.payload;
      const { id: userId } = payload;

      const {
        title,
        body,
        featuredImg,
        slug,
        metaTitle,
        metaDescription,
        metaKeywords,
        tags,
        categoryId,
        isPublished,
        scheduled
      } = req.body;

      const newSlug = slugify(slug);

      const isSlugExist = await Blog.findOne({
        where: { slug: newSlug },
        raw: true,
      });

      if(isSlugExist) {
        const response = new Response(
          false,
          400,
          'Slug exist, try something else'
          )
        return res.status(400).json(response);
      };

      const blogs = await Blog.create({
        title,
        body,
        featuredImg,
        slug: newSlug,
        metaTitle,
        metaDescription,
        metaKeywords,
        authorId: userId,
        tags,
        categoryId,
        isPublished,
        scheduled
      });

      const response = new Response(
        true,
        201,
        'Blogs posted successfully',
        { blogs }
      );
      return res.status(response.code).json(response);
    } catch (err) {
        const response = new Response(
          false,
          500,
          'Server error, Please try again later',
        );
        return res.status(response.code).json(response);
      }
  }

  static async getAll(req, res) {
    try {
      const blogs = await Blog.findAll({
        raw: true,
        include: [
          { model: User, as: 'user', attributes: ['firstName', 'lastName']}
        ]
      });
      if (!blogs) {
        const response = new Response(
          false,
          404,
          'No Blog found',
        );
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Blogs retrieved successfully',
        { blogs }
      );
      return res.status(response.code).json(response);
    } catch (err) {
      const response = new Response(
        false,
        500,
        'Server error, Please try again later',
      );
      return res.status(response.code).json(response);
    }
  }

  static async getOne(req, res) {
    try {
      const { slug } = req.params;

      const blog = await Blog.findOne({
        where: { slug },
        raw: true,
        include: [
          { model: User, as: 'user', attributes: ['firstName', 'lastName']},
          { model: Category, as: 'category', attributes: ['title']}
        ]
      });
      if (!blog) {
        const response = new Response(false, 404, 'No Blog found');
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Blog retrieved successfully',
        { blog }
      );
      return res.status(response.code).json(response);
    } catch (err) {
      const response = new Response(
        false,
        500,
        'Server error, Please try again later',
      );
      return res.status(response.code).json(response);
    }
  }
}

export default BlogController;
