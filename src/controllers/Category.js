import Response from '../helpers/Response';
import db from '../database/models';

const { Category  } = db;

class CategoryController {
  static async create(req, res) {
    try {
      const { payload } = req.payload;
      const { id: userId } = payload;

      const {
        title, slug, type, avatar, description, coursesCompleted
      } = req.body;

      const category = await Category.create({
        title,
        slug,
        userId,
        type,
        avatar,
        description,
        coursesCompleted
      });

      const response = new Response(
        true,
        201,
        'Category posted successfully',
        { category }
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

  static async getAllForCourses(req, res) {
    try {
      const { payload } = req.payload;
      const { id: userId } = payload;

      const category = await Category.findAll({
        where: { userId, type: 'courses' },
        returning: true
      });
      if (!category) {
        const response = new Response(
          false,
          404,
          'No category found',
        );
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Category retrieved successfully',
        { category }
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

  static async getAllForBlogs(req, res) {
    try {
      const { payload } = req.payload;
      const { id: userId } = payload;

      const category = await Category.findAll({
        where: { userId, type: 'blogs' },
        returning: true
      });
      if (!category) {
        const response = new Response(
          false,
          404,
          'No category found',
        );
        return res.status(response.code).json(response);
      }
      const response = new Response(
        true,
        200,
        'Category retrieved successfully',
        { category }
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

export default CategoryController;
