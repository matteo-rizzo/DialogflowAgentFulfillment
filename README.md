# DialogflowAgentFulfillment

[![CircleCI](https://circleci.com/gh/MatteoRizzo96/DialogflowAgentFulfillment.svg?style=svg&circle-token=03bca14b664925638bdb0478493624ee0d9d98df)](https://circleci.com/gh/MatteoRizzo96/DialogflowAgentFulfillment)

## 🤖 What is it?

This is the Firebase fulfillment for an Italian speaking shopping assistant bot. It implements webhook slot filling and API fulfillment.

## 🙌 Getting started

In the `./firebaseFulfillment` folder you find docs and code for the Dialogflow Firebase fulfillment. `Marcello.zip` is the Dialogflow agent that you can import inside your project.

## ✅ Running the tests

* The project integrates [TestMyBot](https://github.com/codeforequity-at/testmybot) for testing. You will find further information about this in a dedicated README.md in the `test` folder.
* The project integrates unit testing built with [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/). You will find further information about this in a dedicated README.md in the `firebaseFulfillment/firebase/functions/test` folder.

## 🌀 Continuous integration

The project integrates a CI flow built with [CircleCI](https://circleci.com/) that runs the test for the bot and the Firebase fulfillment at every commit.

## 🚀 Deployment

The fulfillment may be deployed as a Cloud function for Firebase. You will find further information about this in a dedicated README.md in the `firebaseFulfillment` folder.
 
## ⚡ Built With

* [Dialogflow V2](https://dialogflow.com/) - NLU module and bot development framework
* [Dialogflow fulfillment for Node.js](https://github.com/dialogflow/dialogflow-fulfillment-nodejs) - Official Dialogflow fulfillment library for Node.js
* [Node.js](https://nodejs.org/it/) - JS runtime

## 😎 Authors

Matteo Rizzo

## 🎓 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
