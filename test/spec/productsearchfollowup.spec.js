const TestMyBot = require('testmybot')
const jasmineHelper = TestMyBot.helper.jasmine();
const Utility = require('./utility')

const tmb = new TestMyBot()

describe('Product Search Followup Test Suite', function() {

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
  
  it('should answer with macrocategory slot filling when promped with gender', function(done) {

    // Initialization
    tmb.hears('Ciao');
    tmb.says().then(() => {

      // Hears
      const input = 'Cerco da uomo';
      console.log('\n\nBot hears: ' + input)
      tmb.hears(input);
  
      // Says
      tmb.says().then((msg) => {
  
        const fulfillmentMessages = msg.sourceData.fulfillmentMessages;
  
        console.log('Bot says: ' + JSON.stringify(fulfillmentMessages, null, 2));
  
        // Divide text messages and quick replies
  
        let textMessages = Utility.parseTextMessages(fulfillmentMessages);
        let quickReplies = Utility.parseQuickReplies(fulfillmentMessages);
  
        // Expect 1 text messages
  
        expect(textMessages.length).toBeDefined();
        expect(textMessages.length).toBe(1);
  
        // Expect 4 quick replies (at least)
        
        expect(quickReplies.length).toBeDefined();
        expect(quickReplies.length).toBeGreaterThanOrEqual(3);
  
        done();
      }).catch((err) => {
        throw new Error(err);
      });

    })
  }, 10000);

  it('should answer with slot filling when promped with macrocategory', function(done) {

    // Initialization
    tmb.hears('Ciao');
    tmb.says().then(() => {

      // Hears
      const input = 'Cerco delle scarpe';
      console.log('\n\nBot hears: ' + input)
      tmb.hears(input);
  
      // Says
      tmb.says().then((msg) => {
  
        const fulfillmentMessages = msg.sourceData.fulfillmentMessages;
  
        console.log('Bot says: ' + JSON.stringify(fulfillmentMessages, null, 2));
  
        // Divide text messages and quick replies
  
        let textMessages = Utility.parseTextMessages(fulfillmentMessages);
        let quickReplies = Utility.parseQuickReplies(fulfillmentMessages);
  
        // Expect 1 text messages
  
        expect(textMessages.length).toBeDefined();
        expect(textMessages.length).toBe(1);
  
        // Expect 3 quick replies
        
        expect(quickReplies.length).toBeDefined();
        expect(quickReplies.length).toBeGreaterThanOrEqual(3);
  
        done();
      }).catch((err) => {
        throw new Error(err);
      });

    })
  }, 10000);

  it('should answer with slot filling when promped with category', function(done) {

    // Initialization
    tmb.hears('Ciao');
    tmb.says().then(() => {

      // Hears
      const input = 'Cerco delle felpe';
      console.log('\n\nBot hears: ' + input)
      tmb.hears(input);
  
      // Says
      tmb.says().then((msg) => {
  
        const fulfillmentMessages = msg.sourceData.fulfillmentMessages;
  
        console.log('Bot says: ' + JSON.stringify(fulfillmentMessages, null, 2));
  
        // Divide text messages and quick replies
  
        let textMessages = Utility.parseTextMessages(fulfillmentMessages);
        let quickReplies = Utility.parseQuickReplies(fulfillmentMessages);
  
        // Expect 1 text messages
  
        expect(textMessages.length).toBeDefined();
        expect(textMessages.length).toBe(1);
  
        // Expect 3 quick replies
        
        expect(quickReplies.length).toBeDefined();
        expect(quickReplies.length).toBeGreaterThanOrEqual(3);
  
        done();
      }).catch((err) => {
        throw new Error(err);
      });

    })
  }, 10000);

  jasmineHelper.setupJasmineTestCases({ timeout: 60000, tmb });
});