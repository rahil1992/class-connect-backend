/**
 * ProviderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signUp: (req, res) => {
    delete req.body.status;
    Provider
      .create(req.body)
      .fetch()
      .then(record => res.ok(record))
      .catch(err => res.serverError(err));
  },
};

