import Response from '../helpers/Response';
import db from '../database/models';

const { Blog } = db;

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

      const blogs = await Blog.create({
        title,
        body,
        featured_img: featuredImg,
        slug,
        meta_title: metaTitle,
        meta_description: metaDescription,
        meta_keywords: metaKeywords,
        author_id: userId,
        tags,
        Blogs_id: categoryId,
        is_pubished: isPublished,
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
        raw: true
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
      const { blogId } = req.params;

      const blogs = await Blog.findOne({
        where: { id: blogId },
        raw: true
      });
      if (!blogs) {
        const response = new Response(false, 404, 'No Blogs found');
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Blog retrieved successfully',
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
}

export default BlogController;
