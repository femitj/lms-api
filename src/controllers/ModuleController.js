import Response from '../helpers/Response';
import db from '../database/models';

const { Module, Lesson } = db;

class ModuleController {
  static async create(req, res) {
    try {
      const {
        title,
        courseId,
      } = req.body;

      const module = await Module.create({
        title,
        courseId
      });

      const response = new Response(
        true,
        201,
        'Module posted successfully',
        { module }
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
      const { moduleId } = req.params;

      const module = await Module.findOne({
        where: { id: moduleId },
        raw: true
      });
      if (!module) {
        const response = new Response(false, 404, 'No Module found');
        return res.status(response.code).json(response);
      };

      const response = new Response(
        true,
        200,
        'Module retrieved successfully',
        { module }
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

      const modules = await Module.findAll({
        where: { courseId },
        raw: true,
        include: [
          { model: Lesson, as: 'lesson', attributes: ['id', 'description', 'videoUrl', 'fileUrl', 'updatedAt']}
        ]
      });
      if (!modules) {
        const response = new Response(false, 404, 'No Module found');
        return res.status(response.code).json(response);
      };

      const response = new Response(
        true,
        200,
        'Module retrieved successfully',
        { modules }
      );
      return res.status(response.code).json(response);
    } catch (err) {
      // const response = new Response(
      //   false,
      //   500,
      //   'Server error, Please try again later',
      // );
      // return res.status(response.code).json(response);
      console.log(err)
    }
  }

  static async updateModule(req, res) {
    try {
      const { moduleId } = req.params;

      const {
        title,
        courseId
      } = req.body;

      await Module.update(
        {
          title, courseId
        },
        {
          where: { id: moduleId },
          returning: true,
        }
      );

      const response = new Response(
        true,
        200,
        'Module updated successfully',
        {
          module: {
            title, courseId
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

export default ModuleController;
