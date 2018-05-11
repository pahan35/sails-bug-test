/**
 * Created by p35 on 4/23/2018.
 */

const BugTestService = {

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
    const customModule = require('./../../custom_module/index');
    customModule.testMe();
  }

};

module.exports = BugTestService;
