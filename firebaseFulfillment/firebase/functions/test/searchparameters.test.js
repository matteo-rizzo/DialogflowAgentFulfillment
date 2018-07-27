const {WebhookClient} = require('dialogflow-fulfillment');
const SearchParameters = require('../searchparameters');
const chai = require('chai');
const assert = chai.assert;

describe('SearchParameters testing', () => {
        
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

    it('Should construct the search parameters', () => {

        return assert.exists(searchParameters);
    })

    it('Should construct the category map', () => {

      const parameters = {
          "shoes": "Heritage",
          "clothing": "Felpe",
          "accessories": "Berretti",
          "sport": "Tennis"
      };

      const expectedMap = new Map([
        ["scarpe", "heritage"],
        ["abbigliamento", "felpe"],
        ["accessori", "berretti"],
        ["sport", "tennis"]
      ]);

      return assert.deepEqual(searchParameters.getCategoryMap(parameters), expectedMap);
    })

    it('Should not construct the category map', () => {

      const parameters = {
          "shoes": "Heritage",
          "clothing": "Felpe",
          "accessories": "Berretti",
      };

      const expectedMap = new Map([
        ["scarpe", "heritage"],
        ["abbigliamento", "felpe"],
        ["accessori", "berretti"],
        ["sport", "tennis"]
      ]);

      return assert.notEqual(searchParameters.getCategoryMap(parameters), expectedMap);
    })

    it('Should construct the category names map', () => {

      const expectedMap = new Map([
        ["scarpe", "shoes"],
        ["abbigliamento", "clothing"],
        ["accessori", "accessories"],
        ["sport", "sport"]
    ]);

      return assert.deepEqual(searchParameters.getCategoryNamesMap(), expectedMap);
    })

    it('Should return the right macrocategory given a category', () => {

        const parameters = {
            "shoes": "Calcio",
            "clothing": "Felpe",
            "accessories": "Berretti",
            "sport": "Tennis"
        }

        return assert.strictEqual(searchParameters.getMacrocategoryByCategory(parameters), 'scarpe');
    })
     
    it('Should not return the right macrocategory given a category', () => {

      const parameters = {}

      return assert.notExists(searchParameters.getMacrocategoryByCategory(parameters));
    })

    it('Should return the query parameters', () => {

      return assert.isNotEmpty(searchParameters.getQuery());
    })

    it('Should return empty query parameters', () => {

      searchParameters.gender = "";
      searchParameters.macrocategory = "";
      searchParameters.category = "";

      return assert.isEmpty(searchParameters.getQuery()[0]);
    })
})
