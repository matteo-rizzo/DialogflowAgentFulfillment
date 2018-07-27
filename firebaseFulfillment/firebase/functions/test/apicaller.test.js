const APIcaller = require('../apicaller');
const {WebhookClient} = require('dialogflow-fulfillment');
const SearchParameters = require('../searchparameters');
const chai = require('chai');
const assert = chai.assert;

describe('APIcaller testing', () => {
        
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

    it('Should call the categories API and retrieve some results', () => {

        return APIcaller.callCategoriesApi('uomo-scarpe').then((categories) => {
            return assert.isNotEmpty(categories);
        }).catch((err) => {
            throw err;
        })
    }).timeout(6000)

    it('Should call the categories API and retrieve no results', () => {

        return APIcaller.callCategoriesApi('uomo-scarpe-ciclismo').then((categories) => {
            return assert.isEmpty(categories);
        }).catch((err) => {
            throw err;
        })
    })

    it('Should call the product search API and retrieve a result', () => {

        return APIcaller.callProductSearchApi(searchParameters).then((products) => {
            return assert.isNotEmpty(products);
        }).catch((err) => {
            throw err;
        })
    }).timeout(6000)

    it('Should call the product search API and retrieve no result', () => {

        searchParameters.gender = 'donna';

        return APIcaller.callProductSearchApi(searchParameters).then((products) => {
            return assert.notExists(products);
        }).catch((err) => {
            throw err;
        })
    }).timeout(6000)

    it('Should call the products API and retrieve a result', () => {

        return APIcaller.callProductsApi('101.173266_C4732').then((product) => {
            return assert.isNotEmpty(product);
        }).catch((err) => {
            throw err;
        })
    }).timeout(6000)
      
    it('Should call the products API and retrieve no result', () => {

        return APIcaller.callProductsApi('000.000000_00000').then((product) => {
            return product.name;
        }).catch((err) => {
            return assert.exists(err);
        })
    }).timeout(6000)

}).timeout(1000)
