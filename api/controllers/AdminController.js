/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: (req, res) => {
    const {email, password} = req.body;
    if(email !== sails.config.custom.adminEmail) return res.unAuthorized('Invalid Email');
    if(password !== sails.config.custom.adminPassword) return res.unAuthorized('Invalid Password');
    return res.ok('Logged in successfully');
  },
  getUsers: async (req, res) => {
    const users = await User.find();
    return res.ok(users);
  },
  getProviders: async (req, res) => {
    const providers = await Provider.find({status: 'approved'});
    return res.ok(providers);
  },
  getProvidersRequest: async (req, res) => {
    const providers = await Provider.find({status: 'pending'});
    return res.ok(providers);
  },
  acceptProvider: async (req, res) => {
    const {id} = req.query;
    const provider = await Provider.updateOne({id}, {status: 'approved'});
    return res.ok([provider]);
  },
  rejectProvider: async (req, res) => {
    const {id} = req.query;
    const provider = await Provider.updateOne({id}, {status: 'rejected'});
    return res.ok([provider]);
  },
};

