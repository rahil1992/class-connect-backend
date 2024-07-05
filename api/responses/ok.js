/**
 * ok.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.ok();
 *     // -or-
 *     return res.ok(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'ok'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function ok(data = {}, message = 'Request successful') {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 200;

  var response = {
    status: statusCodeToSet,
    message,
    data
  }
  return res.status(statusCodeToSet).send(response);

};
