// Chai is a commonly used library for creating unit test suites. It is easily extended with plugins.
const chai = require('chai');
const assert = chai.assert;

describe('Search parameters testing', () => {

    // Require index.js and save the exports inside a namespace called myFunctions.
    const {WebhookClient} = require('dialogflow-fulfillment');
    const SearchParameters = require('../searchparameters');
           
    it('Should return the right macrocategory given a category', () => {

        // Mock http request and response
        const request = {
            "body": {
                "responseId": "1b460276-3247-4ad8-a78a-86d944723a99",
                "session": "projects/your-agents-project-id/agent/sessions/335fa429-102d-c0ab-a4da-2a04f210c63b",
                "queryResult": {
                  "queryText": "scarpe da calcio da uomo",
                  "parameters": {
                    "sport": "",
                    "macrocategory": "scarpe",
                    "color": [],
                    "accessories": "",
                    "shoes": "Calcio",
                    "clothing": "",
                    "gender": "uomo"
                  },
                  "allRequiredParamsPresent": true,
                  "fulfillmentMessages": [],
                  "outputContexts": [
                    {
                      "name": "projects/your-agents-project-id/agent/sessions/335fa429-102d-c0ab-a4da-2a04f210c63b/contexts/productsearch",
                      "lifespanCount": 20,
                      "parameters": {
                        "clothing": "",
                        "accessories": "",
                        "color.original": "",
                        "sport.original": "",
                        "sport": "",
                        "macrocategory": "scarpe",
                        "color": [],
                        "shoes": "Calcio",
                        "shoes.original": "calcio",
                        "gender": "uomo",
                        "macrocategory.original": "scarpe",
                        "accessories.original": "",
                        "gender.original": "uomo",
                        "clothing.original": ""
                      }
                    },
                    {
                      "name": "projects/your-agents-project-id/agent/sessions/335fa429-102d-c0ab-a4da-2a04f210c63b/contexts/productsearch-followup",
                      "lifespanCount": 10,
                      "parameters": {
                        "sport.original": "",
                        "sport": "",
                        "macrocategory": "scarpe",
                        "color": [],
                        "shoes.original": "calcio",
                        "shoes": "Calcio",
                        "gender": "uomo",
                        "macrocategory.original": "scarpe",
                        "accessories.original": "",
                        "gender.original": "uomo",
                        "clothing.original": "",
                        "clothing": "",
                        "accessories": "",
                        "color.original": ""
                      }
                    }
                  ],
                  "intent": {
                    "name": "projects/conversational-ui-207612/agent/intents/df25baf2-5ab0-4e48-b69a-1fd297cd7bd5",
                    "displayName": "productSearch"
                  },
                  "intentDetectionConfidence": 1,
                  "diagnosticInfo": {
                    "webhook_latency_ms": 4203
                  },
                  "languageCode": "it"
                },
                "webhookStatus": {
                  "message": "Webhook execution successful"
                }
              }
        };
        const response = {};

        // Mock agent
        global.agent = new WebhookClient({ request, response });

        // Construct search parameters
        const searchParameters = new SearchParameters();
        const parameters = {
            "shoes": "Calcio",
            "clothing": "Felpe",
            "accessories": "Berretti",
            "sport": "Tennis"
        }

        // Expect query not to be empty
        return assert.strictEqual(searchParameters.getMacrocategoryByCategory(parameters), 'scarpe');
    })
      
    it('Should return the query parameters', () => {

        // Mock http request and response
        const request = {
            "body": {
                "responseId": "1b460276-3247-4ad8-a78a-86d944723a99",
                "session": "projects/your-agents-project-id/agent/sessions/335fa429-102d-c0ab-a4da-2a04f210c63b",
                "queryResult": {
                  "queryText": "scarpe da calcio da uomo",
                  "parameters": {
                    "sport": "",
                    "macrocategory": "scarpe",
                    "color": [],
                    "accessories": "",
                    "shoes": "Calcio",
                    "clothing": "",
                    "gender": "uomo"
                  },
                  "allRequiredParamsPresent": true,
                  "fulfillmentMessages": [],
                  "outputContexts": [
                    {
                      "name": "projects/your-agents-project-id/agent/sessions/335fa429-102d-c0ab-a4da-2a04f210c63b/contexts/productsearch",
                      "lifespanCount": 20,
                      "parameters": {
                        "clothing": "",
                        "accessories": "",
                        "color.original": "",
                        "sport.original": "",
                        "sport": "",
                        "macrocategory": "scarpe",
                        "color": [],
                        "shoes": "Calcio",
                        "shoes.original": "calcio",
                        "gender": "uomo",
                        "macrocategory.original": "scarpe",
                        "accessories.original": "",
                        "gender.original": "uomo",
                        "clothing.original": ""
                      }
                    },
                    {
                      "name": "projects/your-agents-project-id/agent/sessions/335fa429-102d-c0ab-a4da-2a04f210c63b/contexts/productsearch-followup",
                      "lifespanCount": 10,
                      "parameters": {
                        "sport.original": "",
                        "sport": "",
                        "macrocategory": "scarpe",
                        "color": [],
                        "shoes.original": "calcio",
                        "shoes": "Calcio",
                        "gender": "uomo",
                        "macrocategory.original": "scarpe",
                        "accessories.original": "",
                        "gender.original": "uomo",
                        "clothing.original": "",
                        "clothing": "",
                        "accessories": "",
                        "color.original": ""
                      }
                    }
                  ],
                  "intent": {
                    "name": "projects/conversational-ui-207612/agent/intents/df25baf2-5ab0-4e48-b69a-1fd297cd7bd5",
                    "displayName": "productSearch"
                  },
                  "intentDetectionConfidence": 1,
                  "diagnosticInfo": {
                    "webhook_latency_ms": 4203
                  },
                  "languageCode": "it"
                },
                "webhookStatus": {
                  "message": "Webhook execution successful"
                }
              }
        };
        const response = {};

        // Mock agent
        global.agent = new WebhookClient({ request, response });

        // Construct search parameters
        const searchParameters = new SearchParameters();

        // Expect query not to be empty
        return assert.isNotEmpty(searchParameters.getQuery());
    })
})
