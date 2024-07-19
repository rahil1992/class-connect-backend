/**
 * CourseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  bulkCreate: (req, res) => {
    Course
      .createEach(req.body)
      .then(result => res.ok(result))
      .catch(err => res.badRequest(err));
  },
  list: (req, res) => {
    Course
      .find()
      .then(result => res.ok(result))
      .catch(err => res.badRequest(err));
  },
  get: (req, res) => {
    const {id} = req.query;
    Course
      .findOne({id})
      .then(result => res.ok(result))
      .catch(err => res.badRequest(err));
  },
  verifyCourse: (req, res) => {
    const {id, code} = req.body;
    Course
      .findOne({id, code})
      .then(result => {
        if(!result) return res.badRequest('Invalid Course Code');
        return res.ok(result);
      })
  }
};

