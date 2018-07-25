const TestMyBot = require('testmybot')
const jasmineHelper = TestMyBot.helper.jasmine();
const Utility = require('./utility')

const tmb = new TestMyBot()

describe('Product Search Test Suite', function() {

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
  
  it('should answer to specific product search', function(done) {

    // Initialization
    tmb.hears('Ciao');
    tmb.says().then(() => {

      // Hears
      const input = 'Cerco scarpe da calcio da uomo';
      console.log('\n\nBot hears: ' + input)
      tmb.hears(input);
  
      // Says
      tmb.says().then((msg) => {
  
        const fulfillmentMessages = msg.sourceData.fulfillmentMessages;
  
        console.log('Bot says: ' + JSON.stringify(fulfillmentMessages, null, 2));
  
        // Divide text messages and quick replies
  
        let textMessages = Utility.parseTextMessages(fulfillmentMessages);
        let cards = Utility.parseCards(fulfillmentMessages);
        let quickReplies = Utility.parseQuickReplies(fulfillmentMessages);
  
        // Expect 1 text messages
  
        expect(textMessages.length).toBeDefined();
        expect(textMessages.length).toBe(2);
  
        expect(textMessages[0]).toMatch('Questi sono alcuni dei miei prodotti preferiti dalla collezione calcio per la categoria scarpe uomo.');
        
        // Expect 3 cards
        
        expect(cards.length).toBeDefined();
        expect(cards.length).toBe(3);
  
        // Expect 3 quick replies
        
        expect(quickReplies.length).toBeDefined();
        expect(quickReplies.length).toBe(4);
        
        for(let i = 0; i < quickReplies.length - 1; i++)
        expect(quickReplies[i]).toMatch('Prodotto ' + parseInt(i+1));

        expect(quickReplies[quickReplies.length - 1]).toMatch('Questi prodotti non mi interessano');
  
        done();
      }).catch((err) => {
        throw new Error(err);
      });

    })
  }, 10000);
  
  jasmineHelper.setupJasmineTestCases({ timeout: 60000, tmb });
});