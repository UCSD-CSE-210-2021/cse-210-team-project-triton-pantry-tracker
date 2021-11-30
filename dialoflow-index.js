'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require("dialogflow-fulfillment");
const axios = require('axios');
const requestNode = require('request');
const ANY_ARGUMENT = 'any';process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statementsfunction 
function saveToDb(anyToSave){
    const options = {
        url: 'https://tableaufilteringnew.firebaseio.com/picture.json',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            "any" : anyToSave
        })
    };
    requestNode(options, function(error, requestInternal, body){
        console.log(body);
 });
}exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to the Google Home integration with tableau developed by Nihal Konan `);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

function getspreadsheetdata(){
    return axios.get('https://sheetdb.io/api/v1/rskupde2821dz');
  }

function trialWithin() {
    const name = agent.parameters.name;
    return getspreadsheetdata().then(res=> {
        res.data.map(person => {
            if(person.Name === name)
            agent.add(`The details of ${name} is ${person.Data}`);

});
    });

}  
  function showPicture() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb(any);
    }// Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
intentMap.set('trialwithin', trialWithin);
  // Here you pass as first argument the name of the Intent
  intentMap.set('Show picture', showPicture);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
