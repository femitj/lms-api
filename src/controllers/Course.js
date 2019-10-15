import Response from '../helpers/Response';
import db from '../database/models';

const { Course, Enrollment, Category, Video } = db;

class CourseController {
  static async create(req, res) {
    try {
      const {
        title,
        description,
        videoUrl,
        categoryId,
        duration,
        startDate,
        endDate,
      } = req.body;

      const courses = await Course.create({
        title,
        description,
        videoUrl,
        categoryId,
        duration,
        startDate,
        endDate
      });

      const response = new Response(
        true,
        201,
        'Course posted successfully',
        { courses }
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
      const courses = await Course.findAll({
        raw: true,
        include: [
          {
            model: Video,
            as: 'video'
          }
        ]
      });
      if (!courses) {
        const response = new Response(
          false,
          404,
          'No Course found',
        );
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Courses retrieved successfully',
        { courses }
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
      const { courseId } = req.params;

      const course = await Course.findOne({
        where: { id: courseId },
        raw: true,
        include: [
          {
            model: Video,
            as: 'video',
          },
          { model: Category, as: 'category', attributes: ['id', 'title']}
        ]
      });
      if (!course) {
        const response = new Response(false, 404, 'No Course found');
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Course retrieved successfully',
        { course }
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

  static async getCoursesFromCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await Category.findOne({ where: { id: categoryId } });
      if (!category) {
        return res.status(404).json(
          new Response(false, 404, 'No category found')
        );
      }

      const course = await Course.findAll({
        where: { categoryId },
        raw: true
      });
      if (!course) {
        const response = new Response(false, 404, 'No Course found');
        return res.status(response.code).json(response);
      }

      const response = new Response(
        true,
        200,
        'Course retrieved successfully',
        { course }
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

  static async getStudentCourses(req, res) {
    const { id } = req.payload.payload;
    try {
      const studentCourses = await Enrollment.findAll({
        where: { userId: id },
        include: [
          {
            model: Course,
            as: 'course',
            include: [{ model: Category, as: 'category', attributes: ['id', 'title']}]
          }
        ]
      });
      if (!studentCourses) {
        const response = new Response(
          true,
          200,
          'You"re yet to enroll for any course',
        );
        return res.status(200).json(response);
      }
      const response = new Response(
        true,
        200,
        'All courses enrolled for retrieved successfully',
        { studentCourses },
      );
      return res.status(200).json(response);
    } catch (err) {
      const response = new Response(
        false,
        500,
        'Server error, Please try again later',
      );
      return res.status(response.code).json(response);
    }
  }

  static async enroll(req, res) {
    try {
      const { id } = req.payload.payload;
      const { courseId } = req.params;
      const course = await Course.findOne({ where: { id: courseId } });
      if (!course) {
        return res.status(404).json(
          new Response(false, 404, 'No Course found')
        );
      }
      const enrollment = await Enrollment.create({ userId: id, courseId });
      const response = new Response(
        true,
        201,
        `Successfully enrolled for ${course.title}`,
        { enrollment }
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

  static async updateCourse(req, res) {
    try {
      const { courseId } = req.params;

      const {
        title,
        description,
        videoUrl,
        categoryId,
        duration,
        startDate,
        endDate,
      } = req.body;

      await Course.update(
        {
          title,
          description,
          videoUrl,
          categoryId,
          duration,
          startDate,
          endDate,
        },
        {
          where: { id: courseId },
          returning: true,
        }
      );

      const response = new Response(
        true,
        200,
        'Course updated successfully',
        {
          course: {
            title,
            description,
            videoUrl,
            categoryId,
            duration,
            startDate,
            endDate,
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

export default CourseController;
