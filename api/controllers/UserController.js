/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getProfile: (req, res) => {
    const {id} = req.query;
    Profile
      .findOne({user: id})
      .then(record => res.ok(record))
      .catch(err => res.serverError(err));
  },
  createPublicProfile: (req, res) => {
    Profile
      .create(req.body)
      .fetch()
      .then(record => res.ok(record))
      .catch(err => res.serverError(err));
  },
  updatePublicProfile: (req, res) => {
    const {id} = req.query;
    delete req.body.id;
    console.log(req.body);
    Profile
      .update({id}, req.body)
      .fetch()
      .then(record => res.ok(record))
      .catch(err => res.serverError(err));
  },
  changePassword: (req, res) => {
    const {id, oldPassword, password} = req.body;
    User
      .findOne({id})
      .decrypt()
      .then(record => {
        if (record.password !== oldPassword) return res.unAuthorized('Invalid Password');
        User
          .update({id}, {password})
          .fetch()
          .then(updatedRecord => res.ok(updatedRecord))
          .catch(err => res.serverError(err));
      }).catch(err => res.serverError(err));
  }
};

