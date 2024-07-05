/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: (req, res) => {
    User
      .create(req.body)
      .fetch()
      .then(async user => {
        let token = await sails.helpers.issueToken.with({ payload: { id: user.id } });
        console.log(token);
        user.token = token

        res.ok(user);
      })
      .catch(err => res.badRequest(err));
  },
};

