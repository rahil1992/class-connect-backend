/**
 * unAuthorized.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.unAuthorized();
 *     // -or-
 *     return res.unAuthorized(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'unAuthorized'
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

module.exports = function unAuthorized(message = 'Unauthorized') {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 401;

  var response = {
    status: statusCodeToSet,
    message,
  }
  return res.status(statusCodeToSet).send(response);

};
