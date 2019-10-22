import Response from '../helpers/Response';
import db from '../database/models';

const { Comment } = db;

class CommentController {
  static async create(req, res) {
    try {
      const {
        name,
        email,
        body
      } = req.body;

      const comment = await Comment.create({
        name,
        email,
        body
      });

      const response = new Response(
        true,
        201,
        'Comment posted successfully',
        { comment }
      );
      return res.status(response.code).json(response);
    } catch(err) {
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
      const comments = await Comment.findAll({
        raw: true,
      });
      if (!comments) {
        const response = new Response(
          false,
          404,
          'No Comment found',
        );
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Comments retrieved successfully',
        { comments }
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

export default CommentController;
