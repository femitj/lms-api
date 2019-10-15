import Response from '../helpers/Response';
import db from '../database/models';

const { Video } = db;

class Lesson {
  static async create(req, res) {
    try {
      const {
        description,
        videoUrl,
        courseId,
      } = req.body;

      const video = await Video.create({
        description,
        videoUrl,
        courseId
      });

      const response = new Response(
        true,
        201,
        'Course posted successfully',
        { video }
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
      const { lessonId } = req.params;

      const video = await Video.findOne({
        where: { id: lessonId },
        raw: true
      });
      if (!video) {
        const response = new Response(false, 404, 'No Video found');
        return res.status(response.code).json(response);
      };

      const response = new Response(
        true,
        200,
        'Video retrieved successfully',
        { video }
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
  
    static async getAllByCourse(req, res) {
    try {
      const { courseId } = req.params;

      const videos = await Video.findAll({
        where: { courseId },
        raw: true
      });
      if (!videos) {
        const response = new Response(false, 404, 'No Video found');
        return res.status(response.code).json(response);
      };

      const response = new Response(
        true,
        200,
        'Video retrieved successfully',
        { videos }
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
      const { videoId } = req.params;

      const {
        description,
        videoUrl,
        courseId
      } = req.body;

      await Video.update(
        {
          description, videoUrl, courseId
        },
        {
          where: { id: videoId },
          returning: true,
        }
      );

      const response = new Response(
        true,
        200,
        'Lesson updated successfully',
        {
          lesson: {
            description, videoUrl, courseId
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

export default Lesson;
