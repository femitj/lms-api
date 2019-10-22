import Response from '../helpers/Response';
import db from '../database/models';

const { Lesson } = db;

class LessonController {
  static async create(req, res) {
    try {
      const {
        description,
        videoUrl,
        fileUrl,
        moduleId,
      } = req.body;

      const lesson = await Lesson.create({
        description,
        videoUrl,
        fileUrl,
        moduleId
      });

      const response = new Response(
        true,
        201,
        'Lesson posted successfully',
        { lesson }
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
      const { id } = req.params;

      const lesson = await Lesson.findOne({
        where: { id },
        raw: true
      });
      if (!lesson) {
        const response = new Response(false, 404, 'No Lesson found');
        return res.status(response.code).json(response);
      };

      const response = new Response(
        true,
        200,
        'Lesson retrieved successfully',
        { lesson }
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
  
    static async getAllByModule(req, res) {
    try {
      const { moduleId } = req.params;

      const lessons = await Lesson.findAll({
        where: { moduleId },
        raw: true
      });
      if (!lessons) {
        const response = new Response(false, 404, 'No Lesson found');
        return res.status(response.code).json(response);
      };

      const response = new Response(
        true,
        200,
        'Lessons retrieved successfully',
        { lessons }
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

  static async updateLesson(req, res) {
    try {
      const { id } = req.params;

      const {
        description,
        videoUrl,
        fileUrl,
        moduleId
      } = req.body;

      await Lesson.update(
        {
          description, videoUrl, fileUrl, moduleId
        },
        {
          where: { id },
          returning: true,
        }
      );

      const response = new Response(
        true,
        200,
        'Lesson updated successfully',
        {
          lesson: {
            description, videoUrl, fileUrl, moduleId
          }
        }
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

export default LessonController;
