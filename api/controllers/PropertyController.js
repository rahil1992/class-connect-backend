/**
 * PropertyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  add: (req, res) => {
    Property
      .create(req.body)
      .fetch()
      .then(record => res.ok(record))
      .catch(err => res.serverError(err));
  },
  list: (req, res) => {
    Property
      .find()
      .then(records => res.ok(records))
      .catch(err => res.serverError(err));
  },
  myList: (req, res) => {
    const {id} = req.query;
    Property
      .find({ provider: id })
      .then(records => res.ok(records))
      .catch(err => res.serverError(err));
  },
};

