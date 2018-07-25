const TestMyBot = require('testmybot')
const jasmineHelper = TestMyBot.helper.jasmine();
const Utility = require('./utility')

const tmb = new TestMyBot()

describe('Greetings Test Suite', function() {

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

    // Hears
    const input = 'Ciao';
    console.log('\nBot hears: ' + input)
    tmb.hears(input);

    // Says
    tmb.says().then((msg) => {

      const fulfillmentMessages = msg.sourceData.fulfillmentMessages;

      console.log('Bot says: ' + JSON.stringify(fulfillmentMessages, null, 2));

      // Divide text messages and quick replies

      let textMessages = Utility.parseTextMessages(fulfillmentMessages);
      let cards = Utility.parseCards(fulfillmentMessages);
      let quickReplies = Utility.parseQuickReplies(fulfillmentMessages);

      // Expect 3 text messages

      expect(textMessages.length).toBeDefined();
      expect(textMessages.length).toBe(3);

      expect(textMessages[0]).toMatch('Ciao, sono Marcello, il tuo assistente personale Diadora');
      expect(textMessages[1]).toMatch('Sono qui per aiutarti a trovare il prodotto più adatto a te');
      expect(textMessages[2]).toMatch('Posso esserti utile in qualche modo?');
      
      // Expect 3 quick replies
      
      expect(quickReplies.length).toBeDefined();
      expect(quickReplies.length).toBe(3);
      
      expect(quickReplies[0]).toMatch('Voglio esplorare le categorie');
      expect(quickReplies[1]).toMatch('Ho in mente un prodotto specifico');
      expect(quickReplies[2]).toMatch('Vorrei un consiglio');

      done();
    }).catch((err) => {
      throw new Error(err);
    });
  }, 10000);
  
  jasmineHelper.setupJasmineTestCases({ timeout: 60000, tmb });
});