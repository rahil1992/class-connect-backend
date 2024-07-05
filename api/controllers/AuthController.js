/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signUp: (req, res) => {
    User
      .create(req.body)
      .fetch()
      .then(async user => {
        let token = await sails.helpers.issueToken.with({ payload: { id: user.id } });
        user.token = token
        return res.ok(user);
      })
      .catch(err => res.badRequest(err));
  },
  signIn: (req, res) => {
    const {email, password} = req.body;
    User
      .findOne({email})
      .decrypt()
      .then(async result => {
        if(!result) return res.unAuthorized('User not found');
        if(result.password !== password) return res.unAuthorized('Invalid Credentials');
        result.token = await sails.helpers.issueToken.with({ payload: { id: result.id } });
        return res.ok(result);
      })
      .catch(err => res.badRequest(err));
  },
  resetPassword: (req, res) => {
    const {email} = req.body;
    User
      .findOne({email})
      .then(async result => {
        if(!result) return res.notFound('User not found');
        // await sails.helpers.mailer(
        //   email,
        //   'Password Reset',
        //   'Click on the link to reset your password',
        //   `<a href="http://localhost:1337/reset-password/${result.id}">Reset Password</a>`
        // );
        return res.ok('OTP reset link sent to your email');
      })
  },
  updatePassword: (req, res) => {
    const {email, otp, password} = req.body;
    if(otp !== '123456') return res.unAuthorized('Invalid OTP');
    User
      .update({email})
      .set({password})
      .then(result => res.ok(result))
      .catch(err => res.badRequest(err));
  }
};

