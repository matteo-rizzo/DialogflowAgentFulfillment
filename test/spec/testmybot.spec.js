const TestMyBot = require('testmybot')
const jasmineHelper = TestMyBot.helper.jasmine();

const tmb = new TestMyBot()

describe('TestMyBot Sample Conversation Test Suite', function() {

  beforeAll(function(done) {
    tmb.beforeAll().then(done);
  }, 120000); //lots of timeout, first docker build could take pretty long

  beforeEach(function(done) {
    tmb.beforeEach().then(done);
  }, 60000);

  afterEach(function(done) {
    tmb.afterEach().then(done);
  }, 60000);
  
  afterAll(function(done) {
    tmb.afterAll().then(done);
  }, 60000);

  it('should answer to greetings', function(done) {
    
    tmb.hears('Come stai?');
    
    tmb.says().then((msg) => {
      console.log('got Message: ' + JSON.stringify(msg));
      expect(msg && msg.messageText).toMatch(/echo/);
      done();
    }).catch((err) => {
      throw new Error(err);
    });
  }, 10000);

  jasmineHelper.setupJasmineTestCases({ timeout: 60000, tmb });
});