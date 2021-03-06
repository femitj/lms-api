import jwt from 'jsonwebtoken';
import db from '../database/models';
import jwtHelper from '../helpers/Token';
import hashHelper from '../helpers/Hash';
import Response from '../helpers/Response';
import EmailNotifications from '../helpers/EmailNotifications';

const { User } = db;
const { hashPassword } = hashHelper;
const { sendPasswordResetMail } = EmailNotifications;

/** authentication controller class */
class Auth {
  /**
   * @description - this method creates user
   *
   * @param {object} req - the request sent to the router
   * @param {object} res  - the request sent back from the controller
   * @returns {object} - object
   */
  static async signup(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        avatar
      } = req.body;
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        avatar,
      });

      const { id, role, status } = user;
      const token = jwtHelper.generateToken({
        id,
        email,
        role,
        status
      });
      const verificationToken = jwtHelper.generateToken({ email });
      const verificationLink = `http://${req.headers.host}/api/v1/auth/verify?token=${verificationToken}`;
      await EmailNotifications.signupEmail(email, verificationLink, firstName);

      const response = new Response(
        true,
        201,
        'User signup successfully',
        { user: { email, firstName, lastName, avatar, status, role, token } }
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


  /**
   * @static
   * @description Sends password reset mail
   * @param {object} req Request Object
   * @param {object} res Response Object
   * @returns {object} JSON Response
   */
  static async forgotPassword(req, res) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const response = new Response(false, 404, 'Email does not exist');
        return res.status(response.code).json(response);
      }
      const { id, password: secret } = user.dataValues;
      // create reset token
      const resetToken = jwtHelper.generateToken({ userId: id }, secret, '1h');
      // send mail
      sendPasswordResetMail(req, user, resetToken);
      const response = new Response(
        true,
        200,
        'Password reset mail sent'
      );
      return res.status(response.code).json(response);
    } catch (error) {
      const response = new Response(
        false,
        500,
        'Server error, Please try again later'
      );
      return res.status(response.code).json(response);
    }
  }

  /**
 * @static
 * @description Reset's user password
 * @param {object} req Request Object
 * @param {object} res Response Object
 * @returns {object} JSON Response
 */
  static async resetPassword(req, res) {
    const { password } = req.body;
    const { resetToken } = req.params;
    // get user id from reset token;
    const { payload } = jwt.decode(resetToken) || {};
    const { userId } = payload || {};
    // check if user exists
    try {
      const user = await User.findOne({ where: { id: userId || null } });
      if (!user) {
        const response = new Response(false, 404, 'User does not exist');
        return res.status(response.code).json(response);
      }
      // get reset secret (use user's password as secret to make token one time use only)
      const { password: secret } = user.dataValues;
      jwt.verify(resetToken, secret);
      const passwordHash = hashHelper.hashPassword(password);
      // update user's password
      await User.update({ password: passwordHash }, { where: { id: userId } });
      const response = new Response(true, 200, 'Password reset successful');
      return res.status(response.code).json(response);
    } catch (error) {
      if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
        const response = new Response(false, 400, 'Expired reset link');
        return res.status(response.code).json(response);
      }
      const response = new Response(
        false,
        500,
        'Server error, Please try again later'
      );
      return res.status(response.code).json(response);
    }
  }

  /**
   * @description - this method login user
   *
   * @param {object} req - the request sent to the router
   * @param {object} res  - the request sent back from the controller
   * @returns {object} - object
   */
  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      const response = new Response(
        false,
        404,
        'Incorrect email or password',
        {}
      );
      return res.status(response.code).json(response);
    }
    const hash = user.password;
    const result = hashHelper.comparePassword(hash, password);
    if (result) {
      const {
        id, role, status, firstName, lastName, avatar
      } = user;
      const token = jwtHelper.generateToken({
        id,
        email,
        role,
        status
      });
      const response = new Response(
        true,
        200,
        'user logged in sucessfully',
        { user: { email, firstName, lastName, avatar, status, role, token } }
      );
      return res.status(response.code).json(response);
    }
    const response = new Response(
      false,
      401,
      'Incorrect email or password'
    );
    return res.status(response.code).json(response);
  }

  /**
   * @description - this method Verifies a user
   *
   * @param {object} req - The request payload sent to the router
   * @param {object} res - The response payload sent back from the controller
   *
   * @returns {object} - object
   */
  static async verifyEmail(req, res) {
    try {
      const { payload } = req.payload;
      const { email } = payload;
      const user = await User.findOne({ where: { email } });
      if (user.status === 'active') {
        const response = new Response(
          false,
          403,
          'Your account has already been verified'
        );
        return res.status(response.code).json(response);
      }
      const updateStatus = { status: 'active' };
      await user.update(updateStatus);
      const response = new Response(
        true,
        200,
        'Account verification was successful'
      );
      return res.status(response.code).json(response);
    } catch (err) {
      const response = new Response(
        false,
        500,
        'Server error, Please try again later'
      );
      return res.status(response.code).json(response);
    }
  }
}

export default Auth;
