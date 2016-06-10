/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

 // Icons made by Freepik at http://www.freepik.com, from http://www.flaticon.com, is licensed by http://creativecommons.org/licenses/by/3.0/, Creative Commons BY 3.0, CC 3.0 BY


/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.2891b79e-f8f0-4a8b-93d9-aad4b706043d"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing Human Resources facts.
 */
var HR_FACTS = [
    "As of January first two thousand sixteen, the minimum wage for Alaska is nine dollars and seventy five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Arizona is eight dollars and five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Arkansas is seven dollars and fifty cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Arkansas is eight dollars per hour.",
    "As of January first two thousand sixteen, the minimum wage for California is ten dollars per hour.  This does not include local city minimum wage laws.",
    "As of January first two thousand sixteen, the minimum wage for Colorado is eight dollars and twenty three cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Connecticut is nine dollars and sixty cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Delaware is seven dollars and seventy five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for District of Columbia is eleven dollars and fifty cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Florida is eight dollars and five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Georgia is five dollars and fifteen cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Guam is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Hawaii is eight dollars and fifty cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Idaho is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Illinois is eight dollars and twenty five cents per hour.  This does not include local city minimum wage laws",
    "As of January first two thousand sixteen, the minimum wage for Indiana is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Iowa is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Kansas is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Kentucky is seven dollars and twenty five cents per hour.",
    "Louisiana has no provision on minimum wage",
    "As of January first two thousand sixteen, the minimum wage for Maine is seven dollars and fifty cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Maryland is eight dollars per hour.  This does not include local city minimum wage laws.",
    "As of January first two thousand sixteen, the minimum wage for Massachusetts is ten dollars per hour.",
    "As of January first two thousand sixteen, the minimum wage for Michigan is eight dollars and fifteen cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Minnesota is nine dollars and fifty cents per hour.  Small employer, annual receipts of less than five hundred thousand, is seven dollars and serventy five center per hour on August first two thousand sixteen.",
    "Mississippi has no provision on minimum wage",
    "As of January first two thousand sixteen, the minimum wage for Missouri is seven dollars and sixty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Montana is eight dollars and five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Nebraska is nine dollars per hour.",
    "As of January first two thousand sixteen, the minimum wage for Nevada is eight dollars and twenty five cents per hour, and seven dollars and twenty five cents per hour if employer provides health benefits.",
    "As of January first two thousand sixteen, the minimum wage for New Hampshire is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for New Jersey is eight dollars and thirty eight cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for New Mexico is seven dollars and fifty cents per hour.  This not include local city minimum wage laws.",
    "As of January first two thousand sixteen, the minimum wage for New York is nine dollars per hour.",
    "As of January first two thousand sixteen, the minimum wage for Ohio is eight dollars and ten cents per hour, and seven dollars and twenty five cents for employers grossing two hundred and ninty seven thousand dollars or less.",
    "As of January first two thousand sixteen, the minimum wage for Oklahoma is seven dollars and twenty five cents per hour, and two dollars per hour if employers with gorss annual sales of less than one hundred thousand dollars and fewer than ten employees.",
    "As of January first two thousand sixteen, the minimum wage for New Hampshire is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Oregon is nine dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Pennsylvania is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Puerto Rico is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Rhode Island is nine dollars per hour.",
    "South Carolina has no provision on minimum wage",
    "As of January first two thousand sixteen, the minimum wage for South Dakota is eight dollars and fifty cents per hour.",
    "Tennesee has no provision on minimum wage",
    "As of January first two thousand sixteen, the minimum wage for Texas is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Utah is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Vermont is nine dollars and sixty cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Virgin Islands is seven dollars and twenty five cents per hour, and four dollars and thirty cents per hour for businesses with gross annual receipts of less than $150,000.",
    "As of January first two thousand sixteen, the minimum wage for Virginia is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Washington is nine dollars and fourty seven cents per hour.  This does not include local city minimum wage laws.",
    "As of January first two thousand sixteen, the minimum wage for West Virginia is eight dollars and seventy five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Wisconsin is seven dollars and twenty five cents per hour.",
    "As of January first two thousand sixteen, the minimum wage for Wyoming is five dollars and fifteen cents per hour.",

];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * HR_FACTS is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var HR_FACTS = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
HR_FACTS.prototype = Object.create(AlexaSkill.prototype);
HR_FACTS.prototype.constructor = HR_FACTS;

HR_FACTS.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("HR_FACTS onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

HR_FACTS.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("HR_FACTS onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
HR_FACTS.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("HR_FACTS onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

HR_FACTS.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Space Geek tell me a space fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * SPACE_FACTS.length);
    var fact = SPACE_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your space fact: " + fact;

    response.tellWithCard(speechOutput, "HR_FACTS", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the HR_FACTS skill.
    var HR_FACTS = new HR_FACTS();
    HR_FACTS.execute(event, context);
};

