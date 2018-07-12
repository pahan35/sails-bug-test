/**
 * Created by p35 on 4/23/2018.
 */

const BugTestService = {

  //Looks like already fixed
  async testAwaitAssigning() {
    const justPromise = () => {
      return new Promise((resolve, reject) => {
        resolve(35)
      });
    };

    const expected = await justPromise();

    const someProcessing = expected * 3.5;

    return expected;
  },

  testIndexDebug() {
    return new Promise((resolve, reject) => {
      const zoho = getClient();

      zoho.execute('crm', 'contacts', 'getRecords', {}, (error, result) => {
        if (error) {

        }
      });
      const customModule = require('./../../custom_module/index');
      customModule.testMe();
    })
  }

};

let _client;
function getClient() {
  const authToken = sails.config.zoho.authToken;
  if (typeof _client == 'undefined') {
    const Zoho = require('node-zoho');

    _client = new Zoho({authToken});
  }

  return _client;
}

module.exports = BugTestService;
