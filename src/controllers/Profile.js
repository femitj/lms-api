import db from '../database/models';
import Response from '../helpers/Response';

const { User, Course } = db;

/** user profile class */
class Profile {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} object
   */
  static async getProfile(req, res) {
    try {
      const { payload } = req.payload;
      const { email } = payload;

      const user = await User.findOne({ where: { email } });
      const {
        firstName, lastName, avatar, 
      } = user;

      const response = new Response(
        true,
        200,
        'User Profile retrieved successfuly',
        {
          profile: {
            firstName,
            lastName,
            avatar
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

  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} object
   */
  static async getInstructorProfile(req, res) {
    try {
      const { courseId } = req.params;

      const profile = await Course.findOne({
        where: { id: courseId },
        attributes: ['id', 'title'],
        raw: true,
        include: [
          { model: User, as: 'user',
            attributes: ['firstName', 'lastName', 'avatar', 'role']}
        ]
      });
      // const {
      //   firstName, lastName, avatar, 
      // } = user;

      const response = new Response(
        true,
        200,
        'Course Instructor Profile retrieved successfuly',
        {
          profile
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

  /**
   *
   * @param {req} req
   * @param {res} res
   * @returns {object} object
   */
  static async updateProfile(req, res) {
    try {
      const { payload } = req.payload;
      const { email } = payload;
      const {
        firstName, lastName, avatar
      } = req.body;

      await User.update(
        {
          firstName, lastName, avatar
        },
        {
          where: { email },
          returning: true,
          raw: true
        }
      );

      const response = new Response(
        true,
        200,
        'User Profile updated successfuly',
        {
          profile: {
            firstName, lastName, avatar
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

export default Profile;
