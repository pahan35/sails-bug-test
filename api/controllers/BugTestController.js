/**
 * BugTestController
 *
 * @description :: Server-side logic for managing bugtests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  testAwaitAssigning(req, res) {
    BugTestService.testAwaitAssigning();
    res.ok();
  },

  testIndexDebug(res, req) {
    BugTestService.testIndexDebug();
    res.ok();
  },
};

